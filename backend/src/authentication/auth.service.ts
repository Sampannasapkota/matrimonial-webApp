import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-user.dto';
import { compare } from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as nodemailer from 'nodemailer';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  private otps = new Map<string, string>();

  async sendOtp(email: string) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    this.otps.set(email, otp);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'merobihee@gmail.com',
        pass: 'nols vueo jnog ngiz',
      },
    });

    const mailOptions = {
      from: '"merobihe" <merobihee@gmail.com>',
      to: email,
      subject: 'Your OTP for Verification',
      text: `Your OTP is ${otp}`,
      html: `<p>Your OTP is <strong>${otp}</strong></p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { success: true, message: 'OTP sent successfully' };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send OTP' };
    }
  }
  async verifyOtp(email: string, otp: string) {
    const storedOtp = this.otps.get(email);

    if (storedOtp === otp) {
      this.otps.delete(email);
      return { success: true, message: 'OTP verified successfully' };
    }

    return { success: false, message: 'Invalid OTP' };
  }

  async login(loginDto: LoginDto) {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: loginDto.email,
          },
          {
            password: loginDto.password,
          },
        ],
      },
    });
    if (!user) {
      throw new NotFoundException('Unable to find the user');
    }

    const token = await this.jwtService.signAsync(user);
    return {
      token,
    };
  }
  async register(registerDto: RegisterUserDto) {
    const userService = new UsersService(this.prismaService);
    const user = await userService.create(registerDto);
    const token = await this.jwtService.signAsync(user);
    return {
      token,
    };
  }
  async getProfile(userId: number) {
    const user = await this.prismaService.user.findFirst({
      where: { id: userId },
      include: {
        DemographicDetails: true,
        FamilyDetails: true,
        Interest: true,
        UploadPhoto: true,
      },
    });

    if (!user) throw new NotFoundException();

    return user;
  }
  async validateGoogleUser(googleUser: CreateUserDto) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { email: googleUser.email },
    });
    if (existingUser) {
      return existingUser;
    }
    return await this.usersService.create(googleUser);
  }

  async forgotPassword(email: string): Promise<string> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const payload = { email: user.email, sub: user.id };
    const resetToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_RESET_SECRET,
      expiresIn: process.env.JWT_RESET_EXPIRATION,
    });
    return resetToken;
  }

  async resetPassword(token: string, newPassword: string): Promise<string> {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: process.env.JWT_RESET_SECRET,
      });
      const user = await this.prismaService.user.findUnique({
        where: {
          id: decoded.sub,
        },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await this.prismaService.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: hashedPassword,
        },
      });
      return 'Password reset successfully';
    } catch (error) {
      throw new BadRequestException('Invalid token or expired token');
    }
  }
}

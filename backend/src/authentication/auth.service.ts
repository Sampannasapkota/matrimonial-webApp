import {
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
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}
  private otps = new Map<string, string>(); // Store OTPs in memory (use a DB in production)

  async sendOtp(email: string) {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP in memory (or DB in production)
    this.otps.set(email, otp);

    // Configure the Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pujankhanal698@gmail.com',
        pass: 'lzmo brgy nfji kbja', // Replace with your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: 'pujankhanal698@gmail.com', // Sender address
      to: email, // Recipient email
      subject: 'Your OTP for Verification', // Email subject
      text: `Your OTP is ${otp}`, // Plain text body
      html: `<p>Your OTP is <strong>${otp}</strong></p>`, // HTML body
    };

    try {
      // Send the email
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
      this.otps.delete(email); // Clear OTP after verification
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
    // if (!(await compare(loginDto.password, user.password))) {
    //   throw new UnauthorizedException('Invalid credentials!');
    // }

    const token = await this.jwtService.signAsync(user);
    return {
      token,
    };
  }
  async register(registerDto: RegisterUserDto) {
    const userService = new UsersService(this.prismaService);
    const user = await userService.create(registerDto);
    const token = await this.jwtService.signAsync({});
    return {
      token,
    };
  }
}

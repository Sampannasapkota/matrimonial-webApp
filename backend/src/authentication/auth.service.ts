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
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}
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
    const token = await this.jwtService.signAsync({});
    return {
      token,
    };
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
}

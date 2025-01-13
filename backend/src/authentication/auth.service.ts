import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async login(loginDto: LoginDto): Promise<any> {
    const { username, password } = loginDto;
    const users = await this.prismaService.user.findUnique({
      where: {
        email: username,
      },
    });
    if (!users) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const validatePassword = await bcrypt.compare(password, users.password);
    if (!validatePassword) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      token: this.jwtService.sign({ username }),
    };
  }
  async register(createDto: RegisterUserDto): Promise<any> {
    const createUsers = {
      fullname: '',
      email: '',
      password: '',
      gender: '',
    };
    createUsers.fullname = createDto.fullname;
    createUsers.email = createDto.email;
    createUsers.password = await bcrypt.hash(createDto.password, 10);
    createUsers.gender = createDto.gender;

    const user = await this.usersService.createUser(createUsers);
    return {
      token: this.jwtService.sign({ username: user.username }),
    };
  }
}

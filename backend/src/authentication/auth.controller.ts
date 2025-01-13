import { request } from 'http';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-user.dto';
import { Body, Post, Req, Res, Request, Controller } from '@nestjs/common';
import { Response } from 'express';
import { RegisterUserDto } from './dto/register-user.dto';
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  async login(
    @Req() request: Request,
    @Res() response: Response,
    @Body() loginDto: LoginDto,
  ): Promise<any> {
    try {
      const user = await this.authService.login(loginDto);
      return response.status(200).json({
        status: 'ok!',
        message: 'Successfully login',
        user: user,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'ok!',
        message: 'Internal server error',
      });
    }
  }
  @Post('/register')
  async register(
    @Req() request: Request,
    @Res() response: Response,
    @Body() registerDto: RegisterUserDto,
  ): Promise<any> {
    try {
      const user = await this.authService.register(registerDto);
      return response.status(200).json({
        status: 'ok!',
        message: 'Successfully Register',
        user: user,
      });
    } catch (err) {
      return response.status(500).json({
        status: 'ok!',
        message: 'Internal server error',
      });
    }
  }
}

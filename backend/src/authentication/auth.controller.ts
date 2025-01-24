import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-user.dto';
import { RegisterUserDto} from './dto/register-user.dto';
import { Public } from 'src/helpers/public';
import { GoogleAuthGuard } from './utils/Guards';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('send-otp')
  async sendOtp(@Body() body: { email: string }) {
    return this.authService.sendOtp(body.email);
  }

  @Public()
  @Post('verify-otp')
  async verifyOtp(@Body() body: { email: string; otp: string }) {
    return this.authService.verifyOtp(body.email, body.otp);
  }

  @Public()
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Public()
  @Post('/register')
  async register(@Body() registerDto: RegisterUserDto) {
    return this.authService.register(registerDto);
  }
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  googleLogin(){}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallBack(@Req()req,@Res()res){ 
    const response =await this.authService.login(req.user.id);
    res.redirect(`http://localhost:5173/login?token=${response.token}`);
    
  }
}

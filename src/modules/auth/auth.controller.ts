import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import WrapResponseInterceptor from 'src/middlewares/wrap-reponse.interceptor';
import { UsersService } from '../v1/common/users/users.service';
import { LoginDto } from './login/dto/login-dto';
import { LoginService } from './login/login.service';
import { RegisterAccountDto } from './register/dto/register-account.dto';
import { RegisterService } from './register/register.service';

@Controller()
//@ApiBearerAuth('defaultBearerAuth')
@ApiTags('Auth')
export class authController {
  constructor(
    private readonly loginService: LoginService,
    private readonly registerService: RegisterService,
  ) {}

  @Post('sign-up')
  register(@Body() account: RegisterAccountDto) {
    return this.registerService.create(account);
  }

  @Post('sign-in')
  create(@Body() account: LoginDto) {
    return this.loginService.login(account);
  }
}

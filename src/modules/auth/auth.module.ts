import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../v1/common/users/users.module';
import authConstants from './auth.const';
import { authController } from './auth.controller';
import { JwtStrategy } from './authorization/strategy/jwt.strategy';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';

@Module({
  imports: [UsersModule],
  controllers: [authController],
  providers: [JwtService, JwtStrategy, LoginService, RegisterService],
  exports: [],
})
export class AuthModule {}

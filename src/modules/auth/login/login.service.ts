import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/modules/v1/common/users/user.repository';
import { LoginDto } from './dto/login-dto';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import authConstants from '../auth.const';

@Injectable()
export class LoginService {
  constructor(
    private readonly _userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async login(createUserDto: LoginDto) {
    const { userId, password } = createUserDto;
    const isUserID = await this._userRepository
      .getModel()
      .findOne({ userId })
      .exec();
    if (!isUserID) {
      throw new BadRequestException(
        'Account does not exist. Please check user ID again ',
      );
    }
    try {
      const isPassword = await bcryptjs.compareSync(
        password,
        isUserID.password,
      );
      if (isPassword === false) {
        throw new BadRequestException('userID or password is  incorrect');
      }
      const token = await this.jwtService.sign(
        {
          userId,
          roles: isUserID.roles,
          expiresIn: authConstants.jwt.expirationTime.accessToken,
        },
        { secret: authConstants.jwt.secret },
      );
      return {
        error: false,
        access_token: token,
        userId,
        expiry_time: authConstants.jwt.expirationTime.accessToken,
      };
    } catch (error) {
      throw new BadRequestException(error.response);
    }
  }
}

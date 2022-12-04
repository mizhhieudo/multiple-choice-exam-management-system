import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/v1/common/users/dto/create-user.dto';
import { UserRepository } from 'src/modules/v1/common/users/user.repository';
import { RegisterAccountDto } from './dto/register-account.dto';
import * as bcryptjs from 'bcryptjs';
import { UserDocument } from 'src/modules/v1/common/users/entities/user.entity';
@Injectable()
export class RegisterService {
  constructor(private readonly _userRepository: UserRepository) {}
  async create(createUserDto: RegisterAccountDto) {
    const { userId, email, name, password, avatar } = createUserDto;
    const isUserID = await this._userRepository.getModel().findOne({ userId });
    const isUserEmail = await this._userRepository
      .getModel()
      .findOne({ email });
    if (isUserID || isUserEmail) {
      throw new BadRequestException(
        'userID already or email exists. Please check your id user or email again',
      );
    }
    try {
      const encryptPassword = await bcryptjs.hashSync(password);
      const user = {
        userId,
        email,
        name,
        password: encryptPassword,
      };
      const userDocument = await this._userRepository.create(
        <UserDocument>(<unknown>user),
      );
      return userDocument;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

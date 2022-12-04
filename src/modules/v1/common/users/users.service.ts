import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import * as bcryptjs from 'bcryptjs';
import { User, UserDocument } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(private readonly _userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto) {
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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

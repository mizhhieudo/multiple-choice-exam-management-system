import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/modules/base/mongodb/Repository';
import { UserDocument } from './entities/user.entity';
import { USER_CONST } from './user.const';

@Injectable()
export class UserRepository extends Repository<UserDocument> {
  constructor(
    @InjectModel(USER_CONST.MODEL_NAME) private userModel: Model<UserDocument>,
  ) {
    super(userModel);
  }
}

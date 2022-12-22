import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/modules/base/mongodb/Repository';
import { COMMENT_CONST } from './comment.const';
import { CommentDocument } from './entities/comment.entity';

@Injectable()
export class CommentRepository extends Repository<CommentDocument> {
  constructor(
    @InjectModel(COMMENT_CONST.MODEL_NAME)
    private commentModel: Model<CommentDocument>,
  ) {
    super(commentModel);
  }
}

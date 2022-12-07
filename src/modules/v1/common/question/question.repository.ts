import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/modules/base/mongodb/Repository';
import { QuestionDocument, QuestionSchema } from './entities/question.entity';
import { QUESTION_CONST } from './question.const';

@Injectable()
export class QuestionRepository extends Repository<QuestionDocument> {
  constructor(
    @InjectModel(QUESTION_CONST.MODEL_NAME)
    private questionModel: Model<QuestionDocument>,
  ) {
    super(questionModel);
  }
}

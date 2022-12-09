import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/modules/base/mongodb/Repository';
import { ExamDocument } from './entities/exam.entity';
import { EXAM_CONST } from './exam.const';

@Injectable()
export class ExamRepository extends Repository<ExamDocument> {
  constructor(
    @InjectModel(EXAM_CONST.MODEL_NAME) private examModel: Model<ExamDocument>,
  ) {
    super(examModel);
  }
}

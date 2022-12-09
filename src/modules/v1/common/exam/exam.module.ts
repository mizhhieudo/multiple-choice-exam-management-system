import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EXAM_CONST } from './exam.const';
import { ExamSchema } from './entities/exam.entity';
import { QuestionModule } from '../question/question.module';
import { ExamRepository } from './exam.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EXAM_CONST.MODEL_NAME,
        schema: ExamSchema,
      },
    ]),
    QuestionModule,
  ],
  controllers: [ExamController],
  providers: [ExamService, ExamRepository],
})
export class ExamModule {}

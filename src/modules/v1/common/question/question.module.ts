import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { QuestionRepository } from './question.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { QUESTION_CONST } from './question.const';
import { QuestionSchema } from './entities/question.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: QUESTION_CONST.MODEL_NAME,
        schema: QuestionSchema,
      },
    ]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService, QuestionRepository],
})
export class QuestionModule {}

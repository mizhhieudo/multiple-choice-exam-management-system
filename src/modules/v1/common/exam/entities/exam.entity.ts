import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Question } from '../../question/entities/question.entity';
import { QUESTION_CONST } from '../../question/question.const';
import { EXAM_CONST } from '../exam.const';

@Schema({ collection: EXAM_CONST.MODEL_NAME, timestamps: true })
export class Exam {
  @Prop({ type: String, required: true })
  examMaterial: string;
  @Prop({ type: String, required: true })
  examPaperCode: string;
  @Prop({ type: String, required: true })
  createAt: string;
  @Prop({ type: [SchemaTypes.ObjectId], ref: QUESTION_CONST.MODEL_NAME })
  questionList: Question[];
  @Prop({ type: Number, required: true })
  numberOfQuestions: number;
}
export type ExamDocument = Exam & Document;
export const ExamSchema = SchemaFactory.createForClass(Exam);

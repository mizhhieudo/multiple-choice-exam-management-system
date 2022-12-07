import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { QUESTION_CONST } from '../question.const';

@Schema({ collection: QUESTION_CONST.MODEL_NAME, timestamps: true })
export class Question {
  @Prop({ type: String, required: true })
  question: string;
  @Prop({ type: String, required: true })
  answerA: string;
  @Prop({ type: String, required: true })
  answerB: string;
  @Prop({ type: String, required: true })
  answerC: string;
  @Prop({ type: String, required: true })
  answerD: string;
  @Prop({ type: String, required: true })
  answerCorrect: string;
}
export type QuestionDocument = Question & Document;
export const QuestionSchema = SchemaFactory.createForClass(Question);

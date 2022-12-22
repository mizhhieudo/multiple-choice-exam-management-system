import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Exam } from '../../exam/entities/exam.entity';
import { EXAM_CONST } from '../../exam/exam.const';
import { QUESTION_CONST } from '../../question/question.const';
import { User } from '../../users/entities/user.entity';
import { USER_CONST } from '../../users/user.const';

export class QuestionResponse {
  @Prop({ type: SchemaTypes.ObjectId, ref: QUESTION_CONST.MODEL_NAME })
  questionId: string;

  @Prop({ type: String, length: 255 })
  resultUser: string;
}

export class Schedule {
  @Prop({ type: SchemaTypes.ObjectId, ref: USER_CONST.MODEL_NAME })
  candidatesId: User;

  @Prop({ type: SchemaTypes.ObjectId, ref: USER_CONST.MODEL_NAME })
  quizCreator: User;

  @Prop({ type: String, length: 255, unique: true, required: true })
  scheduleId: string;

  @Prop({ type: String, length: 255, default: null })
  schedulePassword: string;

  @Prop({ type: Boolean, default: false })
  scheduleIsPublic: boolean;

  @Prop({ type: SchemaTypes.ObjectId, ref: EXAM_CONST.MODEL_NAME })
  examID: Exam;

  @Prop({ type: [QuestionResponse] })
  resultUser: QuestionResponse[];

  @Prop({ type: Date })
  CreateAt: Date;

  @Prop({ type: Date })
  limitTime: Date;

  @Prop({ type: Date })
  SubmitAt: Date;

  @Prop({ type: String })
  totalScore: string;

  @Prop({ type: Boolean, default: false })
  isIssue: boolean;

  @Prop({ type: Date })
  dateIssue: Date;

  @Prop({ type: String })
  descriptionIssue: string;
}

export type ScheduleDocument = Schedule & Document;
export const scheduleSchema = SchemaFactory.createForClass(Schedule);

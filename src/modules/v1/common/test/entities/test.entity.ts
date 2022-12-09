import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { QUESTION_CONST } from '../../question/question.const';
import { TEST_CONST } from '../test.const';

@Schema({ collection: TEST_CONST.MODEL_NAME, timestamps: true })
export class Test {
  @Prop({ type: String, required: true })
  examMaterial: string;
  @Prop({ type: String, required: true })
  examPaperCode: string;
  @Prop({ type: String, required: true })
  createAt: string;
  @Prop({ type: SchemaTypes.ObjectId, ref: QUESTION_CONST.MODEL_NAME })
  questionList: string;
}
export type TestDocument = Test & Document;
export const TestSchema = SchemaFactory.createForClass(Test);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { USER_CONST } from '../user.const';

@Schema({ collection: USER_CONST.MODEL_NAME, timestamps: true })
export class User {
  @Prop({ type: String, length: 255, unique: true, required: true })
  userId: string;

  @Prop({ type: String, length: 255, default: null })
  name: string;

  @Prop({ type: String, length: 255, unique: true, required: true })
  email: string;

  @Prop({ type: String, length: 255, required: true })
  password: string;

  @Prop({ type: String })
  avatar: string;

  @Prop({ default: 'user' })
  public roles: string[];

  @Prop({ default: false })
  public isIssue: string[];
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);

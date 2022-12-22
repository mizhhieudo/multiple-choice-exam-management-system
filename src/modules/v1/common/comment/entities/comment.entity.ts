import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { News } from '../../news/entities/news.entity';
import { NEWS_CONST } from '../../news/news.const';
import { COMMENT_CONST } from '../comment.const';

@Schema({ collection: COMMENT_CONST.MODEL_NAME, timestamps: true })
export class Comment {
  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: String, length: 255, default: null })
  idUser: string;

  @Prop({ type: [SchemaTypes.ObjectId], ref: NEWS_CONST.MODEL_NAME })
  idNews: News;
}
export type CommentDocument = Comment & Document;
export const CommentSchema = SchemaFactory.createForClass(Comment);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { CATEGORY_CONST } from '../../category/category.consts';
import { Category } from '../../category/entities/category.entity';
import { COMMENT_CONST } from '../../comment/comment.const';
import { NEWS_CONST } from '../news.const';

@Schema({ collection: NEWS_CONST.MODEL_NAME, timestamps: true })
export class News {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, length: 255, default: null })
  author: string;

  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: Date })
  createAt: Date;

  @Prop({ type: String })
  updateAt: string;

  @Prop({ default: false })
  public isPublic: boolean;

  @Prop({ type: [SchemaTypes.ObjectId], ref: COMMENT_CONST.MODEL_NAME })
  commentList: Comment[];

  @Prop({ type: [SchemaTypes.ObjectId], ref: CATEGORY_CONST.MODEL_NAME })
  categoryId: Category;
}

export type NewsDocument = News & Document;
export const NewsSchema = SchemaFactory.createForClass(News);

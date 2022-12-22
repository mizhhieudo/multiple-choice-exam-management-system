import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { News } from '../../news/entities/news.entity';
import { NEWS_CONST } from '../../news/news.const';

export class Documents {
  @Prop({ type: String, required: true })
  nameDocument: string;

  @Prop({ type: String })
  descriptionDocument: string;

  @Prop({ type: String, length: 255, default: null })
  linkDownload: string;
}
export type DocumentsRef = Documents & Document;
export const documentsRefSchema = SchemaFactory.createForClass(Documents);

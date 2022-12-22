import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CATEGORY_CONST } from '../category.consts';

@Schema({ collection: CATEGORY_CONST.MODEL_NAME, timestamps: true })
export class Category {
  @Prop({ type: String, required: true })
  nameCategory: string;

  @Prop({ type: String, default: null })
  describe: string;
}
export type CategoryDocument = Category & Document;
export const CategorySchema = SchemaFactory.createForClass(Category);

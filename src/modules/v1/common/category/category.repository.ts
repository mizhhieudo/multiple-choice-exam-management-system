import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/modules/base/mongodb/Repository';
import { CATEGORY_CONST } from './category.consts';
import { Category, CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoryRepository extends Repository<CategoryDocument> {
  constructor(
    @InjectModel(CATEGORY_CONST.MODEL_NAME)
    private categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel);
  }
}

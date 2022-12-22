import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './entities/category.entity';
import { CATEGORY_CONST } from './category.consts';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CATEGORY_CONST.MODEL_NAME,
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
})
export class CategoryModule {}

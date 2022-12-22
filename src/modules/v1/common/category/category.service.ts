import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private categoryReposity: CategoryRepository) {}
  async create(createCategoryDto: CreateCategoryDto) {
    return await this.categoryReposity.create(
      <CategoryDocument>(<unknown>createCategoryDto),
    );
  }

  async findAll() {
    return await this.categoryReposity.getAll();
  }

  async findOne(id: string) {
    return await this.categoryReposity.getById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryReposity.update(
      id,
      <CategoryDocument>(<unknown>updateCategoryDto),
    );
  }

  async remove(id: string) {
    return await this.categoryReposity.removeById(id);
  }
}

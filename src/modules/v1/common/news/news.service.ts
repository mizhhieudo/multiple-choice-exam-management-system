import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsDocument } from './entities/news.entity';
import { NewsRepository } from './news.repository';

@Injectable()
export class NewsService {
  constructor(private readonly newsRepository: NewsRepository) {}
  async create(createNewsDto: CreateNewsDto) {
    return await this.newsRepository.create(
      <NewsDocument>(<unknown>createNewsDto),
    );
  }

  async findAll() {
    return await this.newsRepository.getAll();
  }

  async findOne(id: string) {
    return await this.newsRepository.getById(id);
  }

  async update(id: string, updateNewsDto: UpdateNewsDto) {
    return await this.newsRepository.update(
      id,
      <NewsDocument>(<unknown>updateNewsDto),
    );
  }

  async remove(id: string) {
    return await this.newsRepository.removeById(id);
  }
}

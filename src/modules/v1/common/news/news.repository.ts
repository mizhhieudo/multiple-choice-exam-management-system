import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/modules/base/mongodb/Repository';
import { NewsDocument } from './entities/news.entity';
import { NEWS_CONST } from './news.const';

@Injectable()
export class NewsRepository extends Repository<NewsDocument> {
  constructor(
    @InjectModel(NEWS_CONST.MODEL_NAME)
    private newsModel: Model<NewsDocument>,
  ) {
    super(newsModel);
  }
}

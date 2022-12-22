import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NEWS_CONST } from './news.const';
import { NewsSchema } from './entities/news.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: NEWS_CONST.MODEL_NAME,
        schema: NewsSchema,
      },
    ]),
  ],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}

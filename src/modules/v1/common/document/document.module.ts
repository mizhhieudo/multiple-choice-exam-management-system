import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DOCUMENT_CONST } from './document.const';
import { documentsRefSchema } from './entities/document.entity';
import { DocumentRepository } from './document.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DOCUMENT_CONST.MODEL_NAME,
        schema: documentsRefSchema,
      },
    ]),
  ],
  controllers: [DocumentController],
  providers: [DocumentService, DocumentRepository],
})
export class DocumentModule {}

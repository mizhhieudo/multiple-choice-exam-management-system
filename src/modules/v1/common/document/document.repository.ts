import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/modules/base/mongodb/Repository';
import { DOCUMENT_CONST } from './document.const';
import { DocumentsRef } from './entities/document.entity';

@Injectable()
export class DocumentRepository extends Repository<DocumentsRef> {
  constructor(
    @InjectModel(DOCUMENT_CONST.MODEL_NAME)
    private documentModel: Model<DocumentsRef>,
  ) {
    super(documentModel);
  }
}

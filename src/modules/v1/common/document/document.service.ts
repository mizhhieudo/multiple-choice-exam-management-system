import { Injectable } from '@nestjs/common';
import { DocumentRepository } from './document.repository';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { DocumentsRef } from './entities/document.entity';

@Injectable()
export class DocumentService {
  constructor(private readonly documentRepository: DocumentRepository) {}
  async create(createDocumentDto: CreateDocumentDto) {
    return await this.documentRepository.create(
      <DocumentsRef>(<unknown>createDocumentDto),
    );
  }

  async findAll() {
    return await this.documentRepository.getAll();
  }

  async findOne(id: string) {
    return await this.documentRepository.getById(id);
  }

  async update(id: string, updateDocumentDto: UpdateDocumentDto) {
    return await this.documentRepository.update(
      id,
      <DocumentsRef>(<unknown>updateDocumentDto),
    );
  }

  async remove(id: string) {
    return await this.documentRepository.removeById(id);
  }
}

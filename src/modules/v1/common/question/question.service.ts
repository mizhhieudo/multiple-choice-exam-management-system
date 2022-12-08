import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import * as reader from 'xlsx';
import * as path from 'path';
import { QuestionRepository } from './question.repository';
import { IListParams } from 'src/modules/base/paginate/IPaginate';
import { QuestionDocument } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(private readonly questionRepo: QuestionRepository) {}
  async create(filesExcels: Express.Multer.File) {
    try {
      const pathFiles = path.join(
        __dirname,
        `../../../../../uploads/excel-files/${filesExcels.filename}`,
      );
      const file = reader.readFile(pathFiles);
      console.log(path.basename(__dirname));
      const data = [];
      const sheets = file.SheetNames;
      for (let i = 0; i < sheets.length; i++) {
        const temp = reader.utils.sheet_to_json(
          file.Sheets[file.SheetNames[i]],
        );
        temp.forEach((res) => {
          data.push(res);
        });
      }
      const storeQuestion = await this.questionRepo.getModel().insertMany(data);
      return {
        message: 'Store questions successfully',
        data: storeQuestion,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getPaginate(question: string) {
    try {
      const paginateParam = {
        options: {
          question: new RegExp(question, 'i'),
        },
      };
      const result = await this.questionRepo.get(<unknown>paginateParam);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      return await this.questionRepo.getAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getById(id: string) {
    try {
      return await this.questionRepo.getById(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    try {
      await this.questionRepo.update(
        id,
        <QuestionDocument>(<unknown>updateQuestionDto),
      );
      return {
        message: 'Update records successfully',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      await this.questionRepo.removeById(id);
      return {
        message: `Delete item successfully`,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}

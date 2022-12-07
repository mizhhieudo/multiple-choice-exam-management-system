import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import * as reader from 'xlsx';
import * as path from 'path';
import { QuestionRepository } from './question.repository';

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

  findAll() {
    return `This action returns all question`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}

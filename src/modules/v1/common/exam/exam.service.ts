import { BadRequestException, Injectable } from '@nestjs/common';
import { QuestionRepository } from '../question/question.repository';
import { CreateExamDto } from './dto/create-exam.dto';
import { SearchExam } from './dto/search-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { ExamDocument } from './entities/exam.entity';
import { ExamRepository } from './exam.repository';

@Injectable()
export class ExamService {
  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly examRepository: ExamRepository,
  ) {}
  async create(createExamDto: CreateExamDto) {
    try {
      const { examMaterial, examPaperCode, createAt, numberOfQuestions } =
        createExamDto;
      const listQuestionsId = await this.questionRepository
        .getModel()
        .find()
        .select('_id');

      if (numberOfQuestions > listQuestionsId.length) {
        throw new BadRequestException(
          "The number of questions in the test is more than the number of questions in the existing test bank. Can't handle !!",
        );
      }
      let exam = this.randomQuestions(listQuestionsId, numberOfQuestions);
      if (exam.length != numberOfQuestions) {
        exam = this.randomQuestions(listQuestionsId, numberOfQuestions);
      }
      const examDoc = {
        examMaterial,
        examPaperCode,
        createAt,
        questionList: exam,
        numberOfQuestions,
      };
      const dataExam = await this.examRepository.create(
        <ExamDocument>(<unknown>examDoc),
      );
      return dataExam;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async paginate(searchOtp: SearchExam) {
    try {
      const { examMaterial, examPaperCode } = searchOtp;
      const paginateParam = {
        options: {
          $or: [
            { examMaterial: new RegExp(examMaterial, 'i') },
            { examPaperCode: new RegExp(examPaperCode, 'i') },
          ],
        },
      };
      const result = await this.examRepository.get(<unknown>paginateParam);
      return result;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      return await this.examRepository
        .getModel()
        .find()
        .populate('questionList');
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const isExamExist = await this.examRepository.getById(id);
      if (!isExamExist) {
        throw new BadRequestException('Not found record!!');
      }
      return await this.examRepository
        .getModel()
        .findById(id)
        .populate('questionList');
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const isExamExist = await this.examRepository.getById(id);
      if (!isExamExist) {
        throw new BadRequestException('Not found record!!');
      }
      await this.examRepository.getModel().remove(isExamExist).exec();
      return {
        message: 'Remove record successfully',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  randomQuestions(listQuestionsId, numberOfQuestions) {
    console.log('===> length', listQuestionsId.length);
    const listQuestions = [];
    let countNumberOfQuestions = 0;
    while (countNumberOfQuestions < numberOfQuestions) {
      const randomQuestions =
        Math.floor(Math.random() * listQuestionsId.length - 1) + 1;
      console.log(randomQuestions);
      if (
        listQuestions.includes(listQuestionsId[randomQuestions]) === false &&
        listQuestionsId[randomQuestions]
      ) {
        listQuestions.push(listQuestionsId[randomQuestions]);
        countNumberOfQuestions++;
      } else {
        break;
      }
    }
    return listQuestions;
  }
}

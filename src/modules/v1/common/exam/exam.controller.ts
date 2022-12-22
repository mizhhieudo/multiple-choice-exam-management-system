import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { ApiTags } from '@nestjs/swagger';
import { SearchExam } from './dto/search-exam.dto';

@Controller()
@ApiTags('Exam-management')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  create(@Body() createExamDto: CreateExamDto) {
    return this.examService.create(createExamDto);
  }

  @Get()
  find(@Query() question: SearchExam) {
    return this.examService.paginate(question);
  }

  @Get('get-all-exam')
  findAll() {
    return this.examService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examService.remove(id);
  }
}

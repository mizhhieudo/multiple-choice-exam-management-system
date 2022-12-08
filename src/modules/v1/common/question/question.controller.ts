import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
  HttpStatus,
  StreamableFile,
  Header,
  Query,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import * as path from 'path';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { SearchQuestion } from './dto/search-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@ApiTags('exam-management')
@Controller()
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post('create-question')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: path.join(__dirname, '../../../../../uploads/excel-files'),
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  create(@UploadedFile() file: Express.Multer.File) {
    return this.questionService.create(file);
  }

  @Get('download-template')
  @ApiResponse({
    schema: {
      type: 'string',
      format: 'binary',
    },
    status: HttpStatus.OK,
  })
  @Header(
    'Content-Disposition',
    'attachment; filename="template-questions.xlsx"',
  )
  downloadTemplate() {
    const file = createReadStream(
      join(process.cwd(), 'uploads/templates/template-questions.xlsx'),
    );
    return new StreamableFile(file);
  }

  @Get()
  get(@Query() question: SearchQuestion) {
    return this.questionService.getPaginate(question?.questionDescription);
  }

  @Get('get-all-questions')
  findAll() {
    return this.questionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.getById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.questionService.remove(id);
  }
}

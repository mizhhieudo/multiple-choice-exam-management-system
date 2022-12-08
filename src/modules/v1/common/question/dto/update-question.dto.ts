import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateQuestionDto } from './create-question.dto';

export class UpdateQuestionDto {
  @ApiProperty({ example: 'How many people are there in the world?' })
  @IsString()
  @IsNotEmpty()
  question: string;

  @ApiProperty({ example: '2 billion' })
  @IsString()
  @IsNotEmpty()
  answerA: string;

  @ApiProperty({ example: '1 billion' })
  @IsString()
  @IsNotEmpty()
  answerB: string;

  @ApiProperty({ example: '3 billion' })
  @IsString()
  @IsNotEmpty()
  answerC: string;

  @ApiProperty({ example: '4 billion' })
  @IsString()
  @IsNotEmpty()
  answerD: string;

  @ApiProperty({ example: '4 billion' })
  @IsString()
  @IsNotEmpty()
  answerCorrect: string;
}

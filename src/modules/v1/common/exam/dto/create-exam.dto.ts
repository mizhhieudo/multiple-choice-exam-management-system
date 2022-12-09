import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExamDto {
  @ApiProperty({ example: 'De Thi Quy 2/2022' })
  @IsString()
  @IsNotEmpty()
  examMaterial: string;

  @ApiProperty({ example: 'XPN-HUMG123' })
  @IsString()
  @IsNotEmpty()
  examPaperCode: string;

  @ApiProperty({ example: '12-1-2022' })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  createAt: string;

  @ApiProperty({ example: '20' })
  @IsNumber()
  @IsNotEmpty()
  numberOfQuestions: number;
}

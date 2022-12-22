import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto {
  @ApiProperty({ example: 'Bản tin phòng thi' })
  @IsString()
  @IsNotEmpty()
  nameCategory: string;

  @ApiProperty({ example: 'Danh mục chứa bản thi về lịch thi' })
  @IsString()
  @IsNotEmpty()
  describe: string;
}

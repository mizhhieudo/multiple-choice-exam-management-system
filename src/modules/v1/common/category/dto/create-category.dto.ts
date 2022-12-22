import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Bản tin phòng thi' })
  @IsString()
  @IsNotEmpty()
  nameCategory: string;

  @ApiProperty({ example: 'Danh mục chứa bản thi về lịch thi' })
  @IsString()
  @IsNotEmpty()
  describe: string;
}

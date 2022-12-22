import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({
    example:
      '[THÔNG BÁO]ID phòng thi hiện tại đang bị lỗi.Lịch thi sẽ được chuyển đổi',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Danh mục chứa bản thi về lịch thi' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({
    example: '<h1>Danh mục chứa bản thi về lịch thi 2012-12-12</h1>',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ example: '2022 - 12 -12' })
  @IsDate()
  @IsNotEmpty()
  createAt: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  isPublic: boolean;

  @ApiProperty({ example: '62d918cb8c883d81e1a9d23c' })
  @IsString()
  categoryId: string;
}

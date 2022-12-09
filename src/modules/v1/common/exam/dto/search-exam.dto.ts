import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class SearchExam {
  @ApiProperty({ description: 'search for exam material' })
  @IsString()
  @IsOptional()
  @Type(() => String)
  @ApiPropertyOptional()
  examMaterial?: string | undefined;

  @ApiProperty({ description: 'search for exam paper code' })
  @IsString()
  @IsOptional()
  @Type(() => String)
  @ApiPropertyOptional()
  examPaperCode?: string | undefined;
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class SearchQuestion {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @Type(() => String)
  @ApiPropertyOptional()
  questionDescription?: string | undefined;
}

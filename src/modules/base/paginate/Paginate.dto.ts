import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IPaginateParams } from './IPaginateBase';

export class PaginateQuery implements IPaginateParams {
  @ApiProperty()
  @IsString()
  @IsOptional()
  sortBy?: string | undefined;

  @ApiProperty({ enum: ['asc', 'desc'] })
  @IsString()
  @IsOptional()
  orderBy?: string | undefined;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page?: number | undefined;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pageSize?: number | undefined;

  // @ApiProperty()
  // content?: string | undefined;
}

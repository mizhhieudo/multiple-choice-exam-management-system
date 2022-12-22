import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateScheduleDto {
  @ApiProperty({ example: 'scheduleId-DXD12' })
  @IsString()
  @IsNotEmpty()
  scheduleId: string;

  @ApiProperty({ example: 'passwordKiThiJQKA2' })
  @IsString()
  @IsNotEmpty()
  schedulePassword: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty()
  @Type(() => Boolean)
  scheduleIsPublic: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty()
  @Type(() => Date)
  limitTime: Date;
}

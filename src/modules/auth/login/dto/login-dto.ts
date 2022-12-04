import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: '1821050xxx' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'password1' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

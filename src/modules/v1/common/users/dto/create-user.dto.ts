import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: '1821050xxx' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'Long Van Nguyen' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'testUser@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'password1' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
  })
  avatar?: string;
}

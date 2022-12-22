import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentDto {
  @ApiProperty({
    example:
      '[THÔNG BÁO]ID phòng thi hiện tại đang bị lỗi.Lịch thi sẽ được chuyển đổi',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}

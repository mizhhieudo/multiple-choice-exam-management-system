import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TEST_CONST } from './test.const';
import { TestSchema } from './entities/test.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TEST_CONST.MODEL_NAME,
        schema: TestSchema,
      },
    ]),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}

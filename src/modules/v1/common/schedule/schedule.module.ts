import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { scheduleSchema } from './entities/schedule.entity';
import { SCHEDULE_CONST } from './schedule.const';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SCHEDULE_CONST.MODEL_NAME,
        schema: scheduleSchema,
      },
    ]),
  ],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}

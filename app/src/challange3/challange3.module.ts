import { Module } from '@nestjs/common';
import { SupermarketQueueController } from './challange3.controller';
import { SupermarketQueueService } from './challange3.service';

@Module({
  imports: [],
  controllers: [SupermarketQueueController],
  providers: [SupermarketQueueService],
})
export class SupermarketQueueModule {}

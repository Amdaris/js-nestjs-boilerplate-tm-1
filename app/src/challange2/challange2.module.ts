import { Module } from '@nestjs/common';
import { RestaurantOrderController } from './challange2.controller';
import { RestaurantOrderService } from './challange2.service';

@Module({
  imports: [],
  controllers: [RestaurantOrderController],
  providers: [RestaurantOrderService],
})
export class RestaurantOrderModule {}

import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RestaurantOrderService } from './challange2.service';

@Controller()
export class RestaurantOrderController {
  constructor(
    private readonly restaurantOrderService: RestaurantOrderService,
  ) {}

  @Post('/restaurant-order')
  @HttpCode(200)
  getResult(@Body() body: { order: string }) {
    return this.restaurantOrderService.getResult(body.order);
  }
}

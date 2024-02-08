import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SupermarketQueueService } from './challange3.service';

@Controller()
export class SupermarketQueueController {
  constructor(
    private readonly supermarketQueueService: SupermarketQueueService,
  ) {}

  @Post('/supermarket-queue')
  @HttpCode(200)
  getResult(@Body() body: { customers: number[]; selfCheckoutPoints: number }) {
    return this.supermarketQueueService.getResult(
      body.customers,
      body.selfCheckoutPoints,
    );
  }
}

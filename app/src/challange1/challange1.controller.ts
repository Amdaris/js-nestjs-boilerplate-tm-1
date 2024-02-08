import { Controller, Get, Query } from '@nestjs/common';
import { CatShelvesService } from './challange1.service';

@Controller()
export class CatShelvesController {
  constructor(private readonly catShelvesService: CatShelvesService) {}

  @Get('/cat-shelves')
  getResult(@Query('start') start: number, @Query('end') end: number) {
    return this.catShelvesService.getResult(start, end);
  }
}

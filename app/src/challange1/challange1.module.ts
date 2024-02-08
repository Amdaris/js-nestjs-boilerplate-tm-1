import { Module } from '@nestjs/common';
import { CatShelvesController } from './challange1.controller';
import { CatShelvesService } from './challange1.service';

@Module({
  imports: [],
  controllers: [CatShelvesController],
  providers: [CatShelvesService],
})
export class CatShelvesModule {}

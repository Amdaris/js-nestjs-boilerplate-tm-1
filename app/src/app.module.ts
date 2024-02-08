import { Module } from '@nestjs/common';
import { CatShelvesModule } from './challange1/challange1.module';
import { RestaurantOrderModule } from './challange2/challange2.module';
import { SupermarketQueueModule } from './challange3/challange3.module';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [
    CatShelvesModule,
    RestaurantOrderModule,
    SupermarketQueueModule,
    PingModule,
  ],
})
export class AppModule {}

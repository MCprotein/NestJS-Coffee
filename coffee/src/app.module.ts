import { Module } from '@nestjs/common';
import { CoffeeMenuModule } from './coffee-menu/coffee-menu.module';
import { OrderModule } from './order/order.module';
import { Repository } from './repository/Repository';

// AppModule에 module들을 등록해주세요
@Module({
  imports: [],
  providers: [],
})
export class AppModule {}

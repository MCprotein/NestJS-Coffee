import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Repository } from '../repository/Repository';
import { OrderDto } from './dto/order.dto';
import { ORDER_REPOSITORY } from '../constants';

// service, controller 클래스를 module에 등록해주세요
// Repository 클래스를 등록해주세요. ex) { provide: 토큰값, useValue: 사용할 인스턴스 },
// 1. ORDER_REPOSITORY를 토큰값으로 해주세요
// 2. useValue에서는 new Repository<OrderDto>()를 사용합니다.
@Module({
  providers: [
    OrderService,
    { provide: ORDER_REPOSITORY, useValue: new Repository<OrderDto>() },
  ],
  controllers: [OrderController],
})
export class OrderModule {}

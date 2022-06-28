import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

// 컨트롤러의 기본 경로를 orders로 바꿔주세요
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // GET 또는 POST 데코레이터 중 적절한 것을 달아주세요
  // this.orderService를 사용해 메서드를 완성해주세요
  // '/orders'
  @Get()
  getOrders() {
    return this.orderService.getOrders();
  }

  // GET 또는 POST 데코레이터 중 적절한 것을 달아주세요
  // request의 params.id를 가져올 수 있도록 @Param 파라미터 데코레이터를 적어주시고
  // @Param의 인자로 'id'를 전달해주세요. params 객체에서 id 키의 value를 가져오겠다는 의미입니다.
  // getMenu의 파라미터인 id는 string 타입입니다.
  // this.orderService를 사용해 메서드를 완성해주세요
  // '/orders/:id'
  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(id);
  }

  // GET 또는 POST 데코레이터 중 적절한 것을 달아주세요
  // Body 파라미터 데코레이터를 사용해주세요
  // createOrder의 파라미터 orderData는 OrderDto 타입에서
  // 'ice', 'name', 'count'만 추가한 것입니다. (Pick을 사용해주세요)
  // this.orderService를 사용해 메서드를 완성해주세요
  // '/orders/creeate'
  @Post('create')
  createOrder(@Body() orderData: Pick<OrderDto, 'ice' | 'name' | 'count'>) {
    return this.orderService.createOrder(orderData);
  }
}

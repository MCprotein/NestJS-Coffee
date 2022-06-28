import { Inject, Injectable } from '@nestjs/common';
import { ORDER_REPOSITORY } from '../constants';
import { v4 as uuidv4 } from 'uuid';
import { CoffeeMenuService } from '../coffee-menu/coffee-menu.service';
import { Repository } from '../repository/Repository';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDER_REPOSITORY) private storage: Repository<OrderDto>,
    private coffeeMenuService: CoffeeMenuService,
  ) {}

  getOrders() {
    const orders = this.storage.getAll();
    if (orders.length === 0) {
      return `주문 내역이 없습니다`;
    }
    return orders;
    // this.storage.getAll 메서드로 모든 주문을 가져오고
    // 주문이 빈배열이면 `주문 내역이 없습니다` 텍스트를 반환해주세요 (error throw가 아닙니다)
    // 빈 배열이 아니면 그대로 반환해주세요
  }

  // 매개변수는 id고 타입은 string입니다.
  // this.storage.getOne 메서드를 사용해 값을 반환해주세요
  getOrder(id: string) {
    return this.storage.getOne(id);
  }

  // 매개변수는 orderData고 타입은 OrderDto에서 'ice', 'name', 'count'만 선택한 것입니다 (Pick)
  createOrder(orderData: Pick<OrderDto, 'ice' | 'name' | 'count'>) {
    // this.coffeeMenuService.getMenus 메서드로 모든 메뉴들을 가져온 후
    // orderData.name과 일치하는 메뉴를 찾아주세요
    const menus = this.coffeeMenuService.getMenus();
    const menu = menus.find((menu) => menu.name === orderData.name);
    // 찾는 메뉴가 없으면 `메뉴에 없는 커피입니다. ${커피메뉴배열.map((menu) => menu.name)}에서 골라주세요.`
    // error를 throw 합니다.
    if (typeof menu === 'undefined') {
      throw new Error(
        `메뉴에 없는 커피입니다. ${menus.map(
          (menu) => menu.name,
        )}에서 골라주세요.`,
      );
    }
    // ice로 주문했는데 메뉴는 ice가 안되는 경우, 또는 hot으로 주문했는데 메뉴는 hot이 안되는 경우
    // `이 메뉴는 ${orderData.ice ? 'ice' : 'hot'}(으)로 주문하실 수 없어요` error를 throw합니다.

    if ((orderData.ice && !menu.ice) || (!orderData.ice && !menu.hot)) {
      throw new Error(
        `이 메뉴는 ${orderData.ice ? 'ice' : 'hot'}(으)로 주문하실 수 없어요`,
      );
    }
    // 문제가 없는 경우 this.storage.save 메서드로 OrderDto 객체를 저장합니다.
    const order = new OrderDto();
    order.id = uuidv4();
    order.price = menu.price;
    order.name = orderData.name;
    order.ice = orderData.ice;
    order.count = orderData.count;
    // id는 uuidv4() 함수를 호출한 값을 사용하면 됩니다.
    // this.storage.save 메서드의 결과값을 반환해주세요
    return this.storage.save(order);
  }
}

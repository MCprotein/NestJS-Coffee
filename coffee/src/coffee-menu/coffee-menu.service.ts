import { v4 as uuidv4 } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from '../repository/Repository';
import { CoffeeMenuDto } from './dto/coffee-menu.dto';
import { COFFEE_REPOSITORY } from '../constants';

@Injectable()
export class CoffeeMenuService {
  constructor(
    @Inject(COFFEE_REPOSITORY) private storage: Repository<CoffeeMenuDto>,
  ) {}

  getMenus() {
    const menus = this.storage.getAll();
    if (menus.length === 0) {
      throw new Error(`아직 카페가 오픈 전이에요. 잠시 후 다시 주문해주세요.`);
    }

    return menus;
    // this.storage.getAll 메서드로 모든 메뉴를 가져오고
    // 메뉴가 빈배열이면 `아직 카페가 오픈 전이에요. 잠시 후 다시 주문해주세요.` error를 throw 해주세요
    // 빈 배열이 아니면 그대로 반환해주세요
  }

  // 매개변수는 id고 타입은 string입니다.
  // this.storage.getOne 메서드를 사용해 값을 반환해주세요
  getMenu(id: string) {
    return this.storage.getOne(id);
  }

  // 매개변수는 menuData고 타입은 CoffeeMenuDto에서 'id'키가 제외된 타입입니다. (Omit)
  createMenu(menuData: Omit<CoffeeMenuDto, 'id'>) {
    const menu = new CoffeeMenuDto();
    menu.id = uuidv4();
    menu.price = menuData.price;
    menu.name = menuData.name;
    menu.ice = menuData.ice;
    menu.hot = menuData.hot;
    return this.storage.save(menu);
    // this.storage.save 메서드를 사용해 값을 저장한 뒤 반환해주세요
    // id 프로퍼티는 uuidv4() 함수를 호출하면 됩니다.
  }
}

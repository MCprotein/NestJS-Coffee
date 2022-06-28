import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoffeeMenuService } from './coffee-menu.service';
import { CoffeeMenuDto } from './dto/coffee-menu.dto';

// 컨트롤러의 기본 경로를 menus로 바꿔주세요
@Controller('menus')
export class CoffeeMenuController {
  constructor(private coffeeMenuService: CoffeeMenuService) {}

  // GET 또는 POST 데코레이터 중 적절한 것을 달아주세요
  // this.coffeeMenuService를 사용해 메서드를 완성해주세요
  // '/menus'
  @Get()
  getMenus() {
    return this.coffeeMenuService.getMenus();
  }

  // GET 또는 POST 데코레이터 중 적절한 것을 달아주세요.
  // 메서드 데코레이터의 인자로 `:id`를 넣어주세요
  // request의 params.id를 가져올 수 있도록 @Param 파라미터 데코레이터를 적어주시고
  // @Param의 인자로 'id'를 전달해주세요. params 객체에서 id 키의 value를 가져오겠다는 의미입니다.
  // getMenu의 파라미터인 id는 string 타입입니다.
  // this.coffeeMenuService를 사용해 메서드를 완성해주세요
  // '/menus/:id'
  @Get(':id')
  getMenu(@Param('id') id: string) {
    return this.coffeeMenuService.getMenu(id);
  }

  // GET 또는 POST 데코레이터 중 적절한 것을 달아주세요
  // Body 파라미터 데코레이터를 사용해주세요
  // createCoffeeMenu의 파라미터 menuData는 id키가 제외된 CoffeeMenuDto 타입입니다. (Omit을 사용해주세요)
  // this.coffeeMenuService를 사용해 메서드를 완성해주세요
  // '/menus/create'
  @Post('create')
  createCoffeeMenu(@Body() menuData: Omit<CoffeeMenuDto, 'id'>) {
    return this.coffeeMenuService.createMenu(menuData);
  }
}

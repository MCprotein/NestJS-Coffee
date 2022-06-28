import { Module } from '@nestjs/common';
import { COFFEE_REPOSITORY } from '../constants';
import { Repository } from '../repository/Repository';
import { CoffeeMenuController } from './coffee-menu.controller';
import { CoffeeMenuService } from './coffee-menu.service';
import { CoffeeMenuDto } from './dto/coffee-menu.dto';

// service, controller 클래스를 module에 등록해주세요
// Repository 클래스를 등록해주세요. ex) { provide: 토큰값, useValue: 사용할 인스턴스 },
// 1. COFFEE_REPOSITORY를 토큰값으로 해주세요
// 2. useValue에서는 new Repository<CoffeeMenuDto>()를 사용합니다.
@Module({
  controllers: [CoffeeMenuController],
  providers: [
    CoffeeMenuService,
    { provide: COFFEE_REPOSITORY, useValue: new Repository<CoffeeMenuDto>() },
  ],
})
export class CoffeeMenuModule {}

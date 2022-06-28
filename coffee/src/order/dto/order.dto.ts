import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BaseDto } from '../../repository/dto/base.dto';

export class OrderDto extends BaseDto {
  // @see: Dto에서 프로퍼티를 정의하는 법이 궁금하면 BaseDto 파일을 봐주세요
  // - name: string (required)
  // - price: number (required)
  // - ice: boolean (required)
  // - count: number (required)
}

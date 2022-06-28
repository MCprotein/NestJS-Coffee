import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BaseDto } from '../../repository/dto/base.dto';

export class CoffeeMenuDto extends BaseDto {
  // @see: Dto에서 프로퍼티를 정의하는 법이 궁금하면 BaseDto 파일을 봐주세요

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  ice: boolean;

  @IsBoolean()
  @IsNotEmpty()
  hot: boolean;
  // - name: string (required)
  // - price: number (required)
  // - ice: boolean (required)
  // - hot: number (required)
}

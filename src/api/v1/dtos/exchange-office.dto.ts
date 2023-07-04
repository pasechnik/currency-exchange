import { ExchangeDto } from './exchange.dto';
import { RateDto } from './rate.dto';

export class ExchangeOfficeDto {
  id: number;
  name: string;
  country: string;
  exchanges: ExchangeDto[];
  rates: RateDto[];
}

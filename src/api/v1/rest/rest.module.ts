import { Module } from '@nestjs/common';
import { CountriesController } from './countries/countries.controller';
import { RatesController } from './rates/rates.controller';
import { ExchangesController } from './exchanges/exchanges.controller';
import { ExchangeOfficesController } from './exchange-offices/exchange-offices.controller';
import { CountriesModule } from '../../../domain/countries/countries.module';
import { RatesModule } from '../../../domain/rates/rates.module';
import { ExchangesModule } from '../../../domain/exchanges/exchanges.module';
import { ExchangeOfficesModule } from '../../../domain/exchange-offices/exchange-offices.module';

@Module({
  controllers: [
    CountriesController,
    RatesController,
    ExchangesController,
    ExchangeOfficesController,
  ],
  imports: [
    CountriesModule,
    RatesModule,
    ExchangesModule,
    ExchangeOfficesModule,
  ],
})
export class RestModule {}

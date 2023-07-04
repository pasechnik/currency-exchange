import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { ExchangeOfficesModule } from './exchange-offices/exchange-offices.module';
import { ExchangesModule } from './exchanges/exchanges.module';
import { RatesModule } from './rates/rates.module';

@Module({
  imports: [
    CountriesModule,
    ExchangeOfficesModule,
    ExchangesModule,
    RatesModule,
  ],
  exports: [
    CountriesModule,
    RatesModule,
    ExchangesModule,
    ExchangeOfficesModule,
  ],
})
export class DomainModule {}

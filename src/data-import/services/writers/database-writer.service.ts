import { Injectable } from '@nestjs/common';
import { Transform } from 'stream';
import { StreamWriterService } from '../../interfaces/stream-writer-service.interface';
import { CountriesService } from '../../../domain/countries/service/countries.service';
import { ExchangeOfficesService } from '../../../domain/exchange-offices/service/exchange-offices.service';
import { ExchangesService } from '../../../domain/exchanges/service/exchanges.service';
import { RatesService } from '../../../domain/rates/service/rates.service';

@Injectable()
export class DatabaseWriterService implements StreamWriterService {
  constructor(
    private readonly countriesService: CountriesService,
    private readonly ratesService: RatesService,
    private readonly exchangesService: ExchangesService,
    private readonly exchangeOfficesService: ExchangeOfficesService,
  ) {}

  async clearStorage() {
    await this.countriesService.deleteAll();
    await this.ratesService.deleteAll();
    await this.exchangesService.deleteAll();
    await this.exchangeOfficesService.deleteAll();
  }

  getSaveStream(): Transform {
    return new Transform({
      transform: (chunk, encoding, callback) => {
        const item = JSON.parse(chunk.toString());
        switch (item.type) {
          case 'country':
            console.log('countries', item.data);
            // await this.countriesService.create(item.data);
            break;
          case 'rate':
            console.log('rate', item.data);
            // await this.ratesService.create(item.data);
            break;
          case 'exchange':
            console.log('exchange', item.data);
            // await this.exchangesService.create(item.data);
            break;
          case 'exchange-office':
            console.log('exchange-office', item.data);
            // await this.exchangeOfficesService.create(item.data);
            break;
          default:
            console.log('default', item.data);
            break;
        }

        console.log(`Data saved: ${chunk.toString()}`);
        callback();
      },
    });
  }
}

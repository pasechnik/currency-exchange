import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Exchange } from '@prisma/client';
import { ExchangesService } from '../../../../domain/exchanges/service/exchanges.service';

@Controller('v1/exchanges')
@Injectable()
export class ExchangesController {
  constructor(private readonly exchangesService: ExchangesService) {}

  @Get()
  findAll(): Promise<Exchange[]> {
    return this.exchangesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Exchange> {
    // return the exchange with the given id
    return this.exchangesService.getById(id);
  }

  @Post()
  create(@Body() exchange: Exchange): Promise<Exchange> {
    // push the exchange to ∏he countries array
    return this.exchangesService.create(exchange);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() exchange: Exchange,
  ): Promise<Exchange> {
    // change the exchange with the given id
    return this.exchangesService.update(id, exchange);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Exchange> {
    // remove the exchange with the given id
    return this.exchangesService.delete(id);
  }
}

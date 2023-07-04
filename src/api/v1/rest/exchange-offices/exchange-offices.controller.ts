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
import { ExchangeOffice } from '@prisma/client';
import { ExchangeOfficesService } from '../../../../domain/exchange-offices/service/exchange-offices.service';

@Controller('v1/exchange-offices')
@Injectable()
export class ExchangeOfficesController {
  constructor(
    private readonly exchangeOfficesService: ExchangeOfficesService,
  ) {}

  @Get()
  findAll(): Promise<ExchangeOffice[]> {
    return this.exchangeOfficesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ExchangeOffice> {
    // return the exchangeOffice with the given id
    return this.exchangeOfficesService.getById(id);
  }

  @Post()
  create(@Body() exchangeOffice: ExchangeOffice): Promise<ExchangeOffice> {
    // push the exchangeOffice to ∏he countries array
    return this.exchangeOfficesService.create(exchangeOffice);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() exchangeOffice: ExchangeOffice,
  ): Promise<ExchangeOffice> {
    // change the exchangeOffice with the given id
    return this.exchangeOfficesService.update(id, exchangeOffice);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<ExchangeOffice> {
    // remove the exchangeOffice with the given id
    return this.exchangeOfficesService.delete(id);
  }
}

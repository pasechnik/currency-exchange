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
import { RatesService } from '../../../../domain/rates/service/rates.service';
import { Rate } from '@prisma/client';

@Controller('v1/rates')
@Injectable()
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  findAll(): Promise<Rate[]> {
    return this.ratesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Rate> {
    // return the rate with the given id
    return this.ratesService.getById(id);
  }

  @Post()
  create(@Body() rate: Rate): Promise<Rate> {
    // push the rate to ∏he countries array
    return this.ratesService.create(rate);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() rate: Rate): Promise<Rate> {
    // change the rate with the given id
    return this.ratesService.update(id, rate);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Rate> {
    // remove the rate with the given id
    return this.ratesService.delete(id);
  }
}

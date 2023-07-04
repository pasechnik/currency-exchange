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
import { CountriesService } from '../../../../domain/countries/service/countries.service';
import { Country } from '@prisma/client';

@Controller('v1/countries')
@Injectable()
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  findAll(): Promise<Country[]> {
    return this.countriesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Country> {
    // return the country with the given id
    return this.countriesService.getById(id);
  }

  @Post()
  create(@Body() country: Country): Promise<Country> {
    // push the country to ∏he countries array
    return this.countriesService.create(country);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() country: Country): Promise<Country> {
    // change the country with the given id
    return this.countriesService.update(id, country);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Country> {
    // remove the country with the given id
    return this.countriesService.delete(id);
  }
}

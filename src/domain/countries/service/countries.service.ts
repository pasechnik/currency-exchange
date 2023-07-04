import { Injectable } from '@nestjs/common';
import { CountriesRepository } from '../repository/countries.repository';
import { Country } from '@prisma/client';

@Injectable()
export class CountriesService {
  constructor(private countriesRepository: CountriesRepository) {}

  // Fetch all countries
  async getAll(): Promise<Country[]> {
    return this.countriesRepository.getAll();
  }

  // Fetch one country by id
  async getById(id: string): Promise<Country> {
    return this.countriesRepository.getById(id);
  }

  // Create a country
  async create(data): Promise<Country> {
    return this.countriesRepository.create(data);
  }

  // Update a country
  async update(id: string, data): Promise<Country> {
    return this.countriesRepository.update(id, data);
  }

  // Delete a country
  async delete(id: string): Promise<Country> {
    return this.countriesRepository.delete(id);
  }

  async deleteAll(): Promise<{ count: number }> {
    return this.countriesRepository.deleteAll();
  }
}

import { Injectable } from '@nestjs/common';
import { RatesRepository } from '../repository/rates.repository';
import { Rate } from '@prisma/client';

@Injectable()
export class RatesService {
  constructor(private ratesRepository: RatesRepository) {}

  // Fetch all countries
  async getAll(): Promise<Rate[]> {
    return this.ratesRepository.getAll();
  }

  // Fetch one country by id
  async getById(id: number): Promise<Rate> {
    return this.ratesRepository.getById(id);
  }

  // Create a country
  async create(data): Promise<Rate> {
    return this.ratesRepository.create(data);
  }

  // Update a country
  async update(id: number, data): Promise<Rate> {
    return this.ratesRepository.update(id, data);
  }

  // Delete a country
  async delete(id: number): Promise<Rate> {
    return this.ratesRepository.delete(id);
  }

  // Delete all rates
  async deleteAll(): Promise<{ count: number }> {
    return this.ratesRepository.deleteAll();
  }
}

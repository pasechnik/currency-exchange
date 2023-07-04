import { Injectable } from '@nestjs/common';
import { ExchangeOfficesRepository } from '../repository/exchange-offices.repository';
import { ExchangeOffice } from '@prisma/client';

@Injectable()
export class ExchangeOfficesService {
  constructor(private ratesRepository: ExchangeOfficesRepository) {}

  // Fetch all ExchangeOffices
  async getAll(): Promise<ExchangeOffice[]> {
    return this.ratesRepository.getAll();
  }

  // Fetch one ExchangeOffice by id
  async getById(id: number): Promise<ExchangeOffice> {
    return this.ratesRepository.getById(id);
  }

  // Create a ExchangeOffice
  async create(data): Promise<ExchangeOffice> {
    return this.ratesRepository.create(data);
  }

  // Update a ExchangeOffice
  async update(id: number, data): Promise<ExchangeOffice> {
    return this.ratesRepository.update(id, data);
  }

  // Delete a ExchangeOffice
  async delete(id: number): Promise<ExchangeOffice> {
    return this.ratesRepository.delete(id);
  }

  async deleteAll(): Promise<{ count: number }> {
    return this.ratesRepository.deleteAll();
  }
}

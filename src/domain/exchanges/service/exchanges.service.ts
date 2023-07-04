import { Injectable } from '@nestjs/common';
import { ExchangesRepository } from '../repository/exchanges.repository';
import { Exchange } from '@prisma/client';

@Injectable()
export class ExchangesService {
  constructor(private exchangesRepository: ExchangesRepository) {}

  // Fetch all exchanges
  async getAll(): Promise<Exchange[]> {
    return this.exchangesRepository.getAll();
  }

  // Fetch one Exchange by id
  async getById(id: number): Promise<Exchange> {
    return this.exchangesRepository.getById(id);
  }

  // Create an Exchange
  async create(data): Promise<Exchange> {
    return this.exchangesRepository.create(data);
  }

  // Update an Exchange
  async update(id: number, data): Promise<Exchange> {
    return this.exchangesRepository.update(id, data);
  }

  // Delete an Exchange
  async delete(id: number): Promise<Exchange> {
    return this.exchangesRepository.delete(id);
  }

  // Delete all exchanges
  // Delete all exchanges
  async deleteAll(): Promise<{ count: number }> {
    return this.exchangesRepository.deleteAll();
  }
}

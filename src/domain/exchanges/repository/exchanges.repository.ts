import { Injectable } from '@nestjs/common';
import { Exchange, PrismaClient } from '@prisma/client';
import { PrismaService } from '../../../persistence/prisma/prisma.service';

@Injectable()
export class ExchangesRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaService) {
    this.prisma = prisma.client;
  }

  // Fetch All Countries
  async getAll(): Promise<Exchange[]> {
    return this.prisma.exchange.findMany();
  }

  // Get Exchange By id
  async getById(id: number): Promise<Exchange> {
    return this.prisma.exchange.findUnique({
      where: { id: id },
    });
  }

  // Create a Exchange
  async create(exchange: Exchange): Promise<Exchange> {
    return this.prisma.exchange.create({
      data: exchange,
    });
  }

  // Update a Exchange
  async update(id: number, exchange: Exchange): Promise<Exchange> {
    return this.prisma.exchange.update({
      where: { id: id },
      data: exchange,
    });
  }

  // Delete a Exchange
  async delete(id: number): Promise<Exchange> {
    return this.prisma.exchange.delete({
      where: { id: id },
    });
  }

  // Delete All Exchanges
  async deleteAll(): Promise<{ count: number }> {
    return this.prisma.exchange.deleteMany();
  }
}

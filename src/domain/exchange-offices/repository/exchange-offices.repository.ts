import { Injectable } from '@nestjs/common';
import { ExchangeOffice, PrismaClient } from '@prisma/client';
import { PrismaService } from '../../../persistence/prisma/prisma.service';

@Injectable()
export class ExchangeOfficesRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaService) {
    this.prisma = prisma.client;
  }

  // Fetch All Countries
  async getAll(): Promise<ExchangeOffice[]> {
    return this.prisma.exchangeOffice.findMany();
  }

  // Get ExchangeOffice By id
  async getById(id: number): Promise<ExchangeOffice> {
    return this.prisma.exchangeOffice.findUnique({
      where: { id: id },
    });
  }

  // Create a ExchangeOffice
  async create(exchangeOffice: ExchangeOffice): Promise<ExchangeOffice> {
    return this.prisma.exchangeOffice.create({
      data: exchangeOffice,
    });
  }

  // Update a ExchangeOffice
  async update(
    id: number,
    exchangeOffice: ExchangeOffice,
  ): Promise<ExchangeOffice> {
    return this.prisma.exchangeOffice.update({
      where: { id: id },
      data: exchangeOffice,
    });
  }

  // Delete a ExchangeOffice
  async delete(id: number): Promise<ExchangeOffice> {
    return this.prisma.exchangeOffice.delete({
      where: { id: id },
    });
  }

  // Delete all ExchangeOffices
  async deleteAll(): Promise<{ count: number }> {
    return this.prisma.exchangeOffice.deleteMany();
  }
}

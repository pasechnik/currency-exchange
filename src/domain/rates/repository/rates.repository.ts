import { Injectable } from '@nestjs/common';
import { PrismaClient, Rate } from '@prisma/client';
import { PrismaService } from '../../../persistence/prisma/prisma.service';

@Injectable()
export class RatesRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaService) {
    this.prisma = prisma.client;
  }

  // Fetch All Countries
  async getAll(): Promise<Rate[]> {
    return this.prisma.rate.findMany();
  }

  // Get Rate By id
  async getById(id: number): Promise<Rate> {
    return this.prisma.rate.findUnique({
      where: { id: id },
    });
  }

  // Create a Rate
  async create(rate: Rate): Promise<Rate> {
    return this.prisma.rate.create({
      data: rate,
    });
  }

  // Update a Rate
  async update(id: number, rate: Rate): Promise<Rate> {
    return this.prisma.rate.update({
      where: { id: id },
      data: rate,
    });
  }

  // Delete a Rate
  async delete(id: number): Promise<Rate> {
    return this.prisma.rate.delete({
      where: { id: id },
    });
  }

  // Delete all rates
  async deleteAll(): Promise<{ count: number }> {
    return this.prisma.rate.deleteMany();
  }
}

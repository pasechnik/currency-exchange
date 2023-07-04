import { Injectable } from '@nestjs/common';
import { Country, PrismaClient } from '@prisma/client';
import { PrismaService } from '../../../persistence/prisma/prisma.service';

@Injectable()
export class CountriesRepository {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaService) {
    this.prisma = prisma.client;
  }

  // Fetch All Countries
  async getAll(): Promise<Country[]> {
    return this.prisma.country.findMany();
  }

  // Get Country By code
  async getById(code: string): Promise<Country> {
    return this.prisma.country.findUnique({
      where: { code: code },
    });
  }

  // Create a Country
  async create(country: Country): Promise<Country> {
    return this.prisma.country.create({
      data: country,
    });
  }

  // Update a Country
  async update(code: string, country: Country): Promise<Country> {
    return this.prisma.country.update({
      where: { code: code },
      data: country,
    });
  }

  // Delete a Country
  async delete(code: string): Promise<Country> {
    return this.prisma.country.delete({
      where: { code: code },
    });
  }

  // Delete All Countries
  async deleteAll(): Promise<{ count: number }> {
    return this.prisma.country.deleteMany();
  }
}

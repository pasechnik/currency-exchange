import { Module } from '@nestjs/common';
import { CountriesRepository } from './repository/countries.repository';
import { CountriesService } from './service/countries.service';
import { PrismaService } from '../../persistence/prisma/prisma.service';

@Module({
  exports: [CountriesService],
  providers: [CountriesService, CountriesRepository, PrismaService],
})
export class CountriesModule {}

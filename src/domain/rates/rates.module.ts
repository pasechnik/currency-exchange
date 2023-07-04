import { Module } from '@nestjs/common';
import { RatesRepository } from './repository/rates.repository';
import { RatesService } from './service/rates.service';
import { PrismaService } from '../../persistence/prisma/prisma.service';

@Module({
  exports: [RatesService],
  providers: [RatesService, RatesRepository, PrismaService],
})
export class RatesModule {}

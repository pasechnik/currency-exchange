import { Module } from '@nestjs/common';
import { ExchangeOfficesRepository } from './repository/exchange-offices.repository';
import { ExchangeOfficesService } from './service/exchange-offices.service';
import { PrismaService } from '../../persistence/prisma/prisma.service';

@Module({
  exports: [ExchangeOfficesService],
  providers: [ExchangeOfficesService, ExchangeOfficesRepository, PrismaService],
})
export class ExchangeOfficesModule {}

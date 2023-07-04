import { Module } from '@nestjs/common';
import { ExchangesRepository } from './repository/exchanges.repository';
import { ExchangesService } from './service/exchanges.service';
import { PrismaService } from '../../persistence/prisma/prisma.service';

@Module({
  exports: [ExchangesService],
  providers: [ExchangesService, ExchangesRepository, PrismaService],
})
export class ExchangesModule {}

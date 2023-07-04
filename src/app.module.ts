import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AppService } from './app.service';
import { DataImportModule } from './data-import/dataImport.module';
import { DomainModule } from './domain/domain.module';
import { PersistenceModule } from './persistence/persistence.module';
import { CustomFormatterService } from './data-import/services/formatters/custom-formatter.service';

@Module({
  imports: [ApiModule, DataImportModule, DomainModule, PersistenceModule],
  controllers: [],
  providers: [AppService, CustomFormatterService],
})
export class AppModule {}

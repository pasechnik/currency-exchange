import { Module } from '@nestjs/common';
import { FileReaderService } from './services/readers/file-reader.service';
import { CustomFormatterService } from './services/formatters/custom-formatter.service';
import { DatabaseWriterService } from './services/writers/database-writer.service';
import { DataOrchestratorService } from './services/data-orchestrator.service';
import { HttpReaderService } from './services/readers/http-reader.service';
import { DomainModule } from '../domain/domain.module';

@Module({
  providers: [
    { provide: 'StreamReaderService', useClass: FileReaderService },
    { provide: 'DataFormatterService', useClass: CustomFormatterService },
    { provide: 'StreamWriterService', useClass: DatabaseWriterService },
    DataOrchestratorService,
    HttpReaderService,
  ],
  imports: [DomainModule],
})
export class DataImportModule {}

import { Inject, Injectable } from '@nestjs/common';
import { pipeline } from 'stream';
import { StreamReaderService } from '../interfaces/stream-reader-service.interface';
import { DataFormatterService } from '../interfaces/data-formatter-service.interface';
import { StreamWriterService } from '../interfaces/stream-writer-service.interface';

@Injectable()
export class DataOrchestratorService {
  constructor(
    @Inject('StreamReaderService')
    private readonly streamReaderService: StreamReaderService,
    @Inject('DataFormatterService')
    private readonly dataFormatterService: DataFormatterService,
    @Inject('StreamWriterService')
    private readonly streamWriterService: StreamWriterService,
  ) {}

  async onModuleInit() {
    // Perform your action here
    await this.processData('./data/exchange.lst'); // Replace 'filePath' with your actual file path
  }

  async processData(filePath: string) {
    await this.streamWriterService.clearStorage();

    const fileStream = this.streamReaderService.read(filePath);
    const parserStream = this.dataFormatterService.getParser();
    const saveStream = this.streamWriterService.getSaveStream();

    pipeline(fileStream, parserStream, saveStream, (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    });
  }
}

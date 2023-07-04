import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { Readable } from 'stream';
import { StreamReaderService } from '../../interfaces/stream-reader-service.interface';

@Injectable()
export class FileReaderService implements StreamReaderService {
  read(filePath: string): Readable {
    return createReadStream(filePath);
  }
}

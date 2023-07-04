import { Readable } from 'stream';

export interface StreamReaderService {
  read(filePath: string): Readable;
}

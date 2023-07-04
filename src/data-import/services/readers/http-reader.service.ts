import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { StreamReaderService } from '../../interfaces/stream-reader-service.interface';
import * as https from 'https';

@Injectable()
export class HttpReaderService implements StreamReaderService {
  read(url: string): Readable {
    const stream = new Readable({
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      read() {}, // No-op implementation of the _read() method
    });

    https.get(url, (response) => {
      response.on('data', (chunk) => {
        stream.push(chunk);
      });

      response.on('end', () => {
        stream.push(null); // Indicate the end of data
      });
    });

    return stream;
  }
}

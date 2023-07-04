import { Transform } from 'stream';

export interface StreamWriterService {
  getSaveStream(): Transform;
  clearStorage(): Promise<void>;
}
import { Transform } from 'stream';

export interface DataFormatterService {
  getParser(): Transform;
}

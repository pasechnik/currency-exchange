import { Transform } from 'stream';

export type CustomTransform = Transform & { parseChunk: (data: string) => any };

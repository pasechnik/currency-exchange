import { Test, TestingModule } from '@nestjs/testing';
import { HttpReaderService } from './http-reader.service';

describe('HttpReaderService', () => {
  let service: HttpReaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpReaderService],
    }).compile();

    service = module.get<HttpReaderService>(HttpReaderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

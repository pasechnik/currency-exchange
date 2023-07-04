import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseWriterService } from './database-writer.service';

describe('SaveStreamService', () => {
  let service: DatabaseWriterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseWriterService],
    }).compile();

    service = module.get<DatabaseWriterService>(DatabaseWriterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

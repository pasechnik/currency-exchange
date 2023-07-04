import { Test, TestingModule } from '@nestjs/testing';
import { CustomFormatterService } from './custom-formatter.service';

describe('DataFormatterService', () => {
  let service: CustomFormatterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomFormatterService],
    }).compile();

    service = module.get<CustomFormatterService>(CustomFormatterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

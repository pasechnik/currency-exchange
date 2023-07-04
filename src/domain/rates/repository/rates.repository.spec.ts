import { Test, TestingModule } from '@nestjs/testing';
import { RatesRepository } from './rates.repository';

describe('RatesRepository', () => {
  let service: RatesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatesRepository],
    }).compile();

    service = module.get<RatesRepository>(RatesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

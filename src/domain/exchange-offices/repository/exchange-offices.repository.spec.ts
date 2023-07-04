import { Test, TestingModule } from '@nestjs/testing';
import { ExchangeOfficesRepository } from './exchange-offices.repository';

describe('ExchangeOfficesRepository', () => {
  let service: ExchangeOfficesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangeOfficesRepository],
    }).compile();

    service = module.get<ExchangeOfficesRepository>(ExchangeOfficesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

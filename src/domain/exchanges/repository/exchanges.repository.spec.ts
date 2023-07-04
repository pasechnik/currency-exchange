import { Test, TestingModule } from '@nestjs/testing';
import { ExchangesRepository } from './exchanges.repository';

describe('ExchangesRepository', () => {
  let service: ExchangesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExchangesRepository],
    }).compile();

    service = module.get<ExchangesRepository>(ExchangesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

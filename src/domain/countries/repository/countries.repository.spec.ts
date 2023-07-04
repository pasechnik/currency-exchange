import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRepository } from './countries.repository';

describe('CountriesRepositoryService', () => {
  let service: CountriesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesRepository],
    }).compile();

    service = module.get<CountriesRepository>(CountriesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

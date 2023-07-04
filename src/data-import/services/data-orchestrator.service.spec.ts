import { Test, TestingModule } from '@nestjs/testing';
import { DataOrchestratorService } from './data-orchestrator.service';

describe('DataOrchestratorService', () => {
  let service: DataOrchestratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataOrchestratorService],
    }).compile();

    service = module.get<DataOrchestratorService>(DataOrchestratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

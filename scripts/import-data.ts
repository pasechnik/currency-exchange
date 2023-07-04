import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { DataOrchestratorService } from '../src/data-import/services/data-orchestrator.service';

async function run() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const dataOrchestratorService = appContext.get(DataOrchestratorService);
  await dataOrchestratorService.processData('./data/exchange.lst');
  await appContext.close();
}

run()
  .then(() => console.log('Done'))
  .catch((err: Error) => console.error(err));

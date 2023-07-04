import { Module } from '@nestjs/common';
import { DefaultModule } from './default/default.module';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [DefaultModule, V1Module],
})
export class ApiModule {}

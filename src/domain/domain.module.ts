import { Module } from '@nestjs/common';
import { services } from '@domain/services';

@Module({
  providers: [...services],
  exports: [...services],
})
export class DomainModule {}

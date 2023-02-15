import { Module } from '@nestjs/common';
import { DomainModule } from '@domain/domain.module';
import { presenters } from '@application/presenters';
import { CustomerController } from '@application/rest/customer.controller';

@Module({
  imports: [DomainModule],
  controllers: [CustomerController],
  providers: [...presenters],
})
export class ApplicationModule {}

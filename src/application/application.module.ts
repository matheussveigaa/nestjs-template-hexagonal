import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { presenters } from './presenters';
import { CustomerController } from './rest/customer.controller';

@Module({
  imports: [DomainModule],
  controllers: [CustomerController],
  providers: [...presenters],
})
export class ApplicationModule {}

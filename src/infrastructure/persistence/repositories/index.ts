import { CUSTOMER_REPOSITORY_NAME } from '@domain/repositories/customer.repository';
import { CustomerRepositoryImpl } from '@infrastructure/persistence/repositories/customer.repository';

export const repositories = [
  {
    provide: CUSTOMER_REPOSITORY_NAME,
    useClass: CustomerRepositoryImpl,
  },
];

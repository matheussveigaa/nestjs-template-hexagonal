import { CUSTOMER_REPOSITORY_NAME } from 'src/domain/repositories/customer.repository';
import { CustomerRepositoryImpl } from './customer.repository';

export const repositories = [
  {
    provide: CUSTOMER_REPOSITORY_NAME,
    useClass: CustomerRepositoryImpl,
  },
];

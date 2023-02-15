import { Inject } from '@nestjs/common';
import { Customer } from '@domain/entities/customer.entity';
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_NAME,
} from '@domain/repositories/customer.repository';

export class FindCustomerByIdService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_NAME)
    private customerRepository: CustomerRepository,
  ) {}

  call(id: string): Promise<Customer> {
    return this.customerRepository.findById(id);
  }
}

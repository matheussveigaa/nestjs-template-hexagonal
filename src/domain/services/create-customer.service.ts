import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_NAME,
} from '../repositories/customer.repository';

@Injectable()
export class CreateCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_NAME)
    private customerRepository: CustomerRepository,
  ) {}

  call(customer: Customer): Promise<Customer> {
    return this.customerRepository.insert(customer);
  }
}

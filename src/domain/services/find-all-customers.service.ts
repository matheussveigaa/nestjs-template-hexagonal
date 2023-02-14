import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_NAME,
} from '../repositories/customer.repository';

@Injectable()
export class FindAllCustomersService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_NAME)
    private customerRepository: CustomerRepository,
  ) {}

  call(): Promise<Customer[]> {
    return this.customerRepository.findAll();
  }
}

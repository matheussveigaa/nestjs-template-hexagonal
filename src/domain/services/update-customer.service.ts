import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '@domain/entities/customer.entity';
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_NAME,
} from '@domain/repositories/customer.repository';
import { FindCustomerByIdService } from '@domain/services/find-customer-by-id.service';

@Injectable()
export class UpdateCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_NAME)
    private readonly customerRepository: CustomerRepository,
    @Inject(FindCustomerByIdService)
    private readonly findCustomerByIdService: FindCustomerByIdService,
  ) {}

  async call(customer: Customer): Promise<Customer> {
    await this.findCustomerByIdService.call(customer.id);

    return this.customerRepository.update(customer);
  }
}

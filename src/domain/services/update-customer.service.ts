import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '@domain/entities/customer.entity';
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_NAME,
} from '@domain/repositories/customer.repository';
import { FindCustomerByIdService } from '@domain/services/find-customer-by-id.service';
import { EntityNotFoundException } from '@domain/exceptions/entity-not-found.exception';

@Injectable()
export class UpdateCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_NAME)
    private readonly customerRepository: CustomerRepository,
    @Inject(FindCustomerByIdService)
    private readonly findCustomerByIdService: FindCustomerByIdService,
  ) {}

  async call(customer: Customer): Promise<Customer> {
    const hasCustomer = !!(await this.findCustomerByIdService.call(
      customer.id,
    ));

    if (!hasCustomer)
      throw new EntityNotFoundException(
        `Entidade não encontrada. ID: ${customer.id}`,
      );

    return this.customerRepository.update(customer);
  }
}

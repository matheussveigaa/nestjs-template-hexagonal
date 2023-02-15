import { Inject } from '@nestjs/common';
import { Customer } from '@domain/entities/customer.entity';
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_NAME,
} from '@domain/repositories/customer.repository';
import { EntityNotFoundException } from '@domain/exceptions/entity-not-found.exception';

export class FindCustomerByIdService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_NAME)
    private customerRepository: CustomerRepository,
  ) {}

  async call(id: string): Promise<Customer> {
    const customer = await this.customerRepository.findById(id);

    if (!customer)
      throw new EntityNotFoundException(`Entidade não encontrada. ID: ${id}`);

    return customer;
  }
}

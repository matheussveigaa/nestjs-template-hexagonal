import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '@domain/entities/customer.entity';
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_NAME,
} from '@domain/repositories/customer.repository';
import { DocumentInvalidException } from '@domain/exceptions/document-invalid.exception';

@Injectable()
export class CreateCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_NAME)
    private customerRepository: CustomerRepository,
  ) {}

  call(customer: Customer): Promise<Customer> {
    if (!customer.isDocumentValid()) throw new DocumentInvalidException();

    return this.customerRepository.insert(customer);
  }
}

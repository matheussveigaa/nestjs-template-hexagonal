import { Inject, Injectable } from '@nestjs/common';
import {
  CustomerRepository,
  CUSTOMER_REPOSITORY_NAME,
} from '@domain/repositories/customer.repository';
import { FindCustomerByIdService } from './find-customer-by-id.service';

@Injectable()
export class DeleteCustomerService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY_NAME)
    private customerRepository: CustomerRepository,
    @Inject(FindCustomerByIdService)
    private readonly findCustomerByIdService: FindCustomerByIdService,
  ) {}

  async call(id: string): Promise<void> {
    await this.findCustomerByIdService.call(id);

    return this.customerRepository.delete(id);
  }
}

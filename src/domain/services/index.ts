import { CreateCustomerService } from '@domain/services/create-customer.service';
import { DeleteCustomerService } from '@domain/services/delete-customer.service';
import { FindAllCustomersService } from '@domain/services/find-all-customers.service';
import { FindCustomerByIdService } from '@domain/services/find-customer-by-id.service';
import { UpdateCustomerService } from '@domain/services/update-customer.service';

export const services = [
  CreateCustomerService,
  UpdateCustomerService,
  DeleteCustomerService,
  FindAllCustomersService,
  FindCustomerByIdService,
];

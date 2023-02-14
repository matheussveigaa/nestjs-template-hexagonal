import { CreateCustomerService } from './create-customer.service';
import { DeleteCustomerService } from './delete-customer.service';
import { FindAllCustomersService } from './find-all-customers.service';
import { FindCustomerByIdService } from './find-customer-by-id.service';
import { UpdateCustomerService } from './update-customer.service';

export const services = [
  CreateCustomerService,
  UpdateCustomerService,
  DeleteCustomerService,
  FindAllCustomersService,
  FindCustomerByIdService,
];

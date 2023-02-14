import { Injectable } from '@nestjs/common';
import { Customer } from 'src/domain/entities/customer.entity';
import { CustomerSchema } from '../schemas/customer.schema';

@Injectable()
export class TypeOrmCustomerPresenter {
  fromDomainToSchema(customer: Customer) {
    if (!customer) return undefined;

    const customerSchema = new CustomerSchema();

    customerSchema.id = customer.id;
    customerSchema.name = customer.name;
    customerSchema.document = customer.document;

    return customerSchema;
  }

  fromSchemaToDomain(customerSchema: CustomerSchema) {
    if (!customerSchema) return undefined;

    const customer = new Customer();

    customer.id = customerSchema.id;
    customer.name = customerSchema.name;
    customer.document = customerSchema.document;

    return customer;
  }
}

import { Injectable } from '@nestjs/common';
import { Customer } from '@domain/entities/customer.entity';
import { CustomerSchema } from '@infrastructure/persistence/postgres/schemas/customer.schema';
import { DocumentType } from '@domain/enums/document-type.enum';

@Injectable()
export class TypeOrmCustomerPresenter {
  fromDomainToSchema(customer: Customer) {
    if (!customer) return undefined;

    const customerSchema = new CustomerSchema();

    customerSchema.id = customer.id;
    customerSchema.name = customer.name;
    customerSchema.document = customer.document;
    customerSchema.documentType = customer.documentType;

    return customerSchema;
  }

  fromSchemaToDomain(customerSchema: CustomerSchema) {
    if (!customerSchema) return undefined;

    const customer = new Customer();

    customer.id = customerSchema.id;
    customer.name = customerSchema.name;
    customer.document = customerSchema.document;
    customer.documentType = customerSchema.documentType as DocumentType;

    return customer;
  }
}

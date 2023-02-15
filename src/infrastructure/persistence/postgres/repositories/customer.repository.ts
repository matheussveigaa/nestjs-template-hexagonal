import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '@domain/entities/customer.entity';
import { CustomerRepository } from '@domain/repositories/customer.repository';
import { CustomerSchema } from '@infrastructure/persistence/postgres/schemas/customer.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCustomerPresenter } from '@infrastructure/persistence/postgres/presenters/customer.presenter';

@Injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
  constructor(
    @InjectRepository(CustomerSchema)
    private readonly repository: Repository<CustomerSchema>,
    @Inject(TypeOrmCustomerPresenter)
    private readonly customerPresenter: TypeOrmCustomerPresenter,
  ) {}

  async findById(id: string): Promise<Customer> {
    const customerSchema = await this.repository.findOneBy({ id: id });

    return this.customerPresenter.fromSchemaToDomain(customerSchema);
  }

  async findAll(): Promise<Customer[]> {
    const customersSchema = await this.repository.find();

    return customersSchema.map(this.customerPresenter.fromSchemaToDomain);
  }

  async insert(customer: Customer): Promise<Customer> {
    const customerSchemaToInsert =
      this.customerPresenter.fromDomainToSchema(customer);

    const insertResult = await this.repository.insert(customerSchemaToInsert);

    const [{ id }] = insertResult.identifiers;

    customer.id = id;

    return customer;
  }

  async update(customer: Customer): Promise<Customer> {
    const customerSchemaToUpdate =
      this.customerPresenter.fromDomainToSchema(customer);

    await this.repository.update({ id: customer.id }, customerSchemaToUpdate);

    return customer;
  }

  async delete(customer: Customer): Promise<void> {
    await this.repository.delete({ id: customer.id });
  }
}

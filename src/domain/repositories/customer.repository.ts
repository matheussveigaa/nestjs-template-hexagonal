import { Customer } from '../entities/customer.entity';

export interface CustomerRepository {
  findById(id: string): Promise<Customer>;
  findAll(): Promise<Customer[]>;
  insert(customer: Customer): Promise<Customer>;
  update(customer: Customer): Promise<Customer>;
  delete(customer: Customer): void;
}

export const CUSTOMER_REPOSITORY_NAME = 'CustomerRepository';

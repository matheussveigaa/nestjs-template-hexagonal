import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCustomerService } from '@domain/services/create-customer.service';
import { DeleteCustomerService } from '@domain/services/delete-customer.service';
import { FindAllCustomersService } from '@domain/services/find-all-customers.service';
import { FindCustomerByIdService } from '@domain/services/find-customer-by-id.service';
import { UpdateCustomerService } from '@domain/services/update-customer.service';
import { CustomerDTO } from '@application/dtos/customer.dto';
import { CustomerPresenter } from '@application/presenters/customer.presenter';

@Controller('customers')
export class CustomerController {
  constructor(
    @Inject(CustomerPresenter)
    private readonly customerPresenter: CustomerPresenter,
    @Inject(CreateCustomerService)
    private readonly createCustomerService: CreateCustomerService,
    @Inject(UpdateCustomerService)
    private readonly updateCustomerService: UpdateCustomerService,
    @Inject(DeleteCustomerService)
    private readonly deleteCustomerService: DeleteCustomerService,
    @Inject(FindAllCustomersService)
    private readonly findAllCustomersService: FindAllCustomersService,
    @Inject(FindCustomerByIdService)
    private readonly findCustomerByIdService: FindCustomerByIdService,
  ) {}

  @Post()
  async create(@Body() dto: CustomerDTO): Promise<CustomerDTO> {
    const customer = this.customerPresenter.fromDtoToDomain(dto);

    return this.customerPresenter.fromDomainToDTO(
      await this.createCustomerService.call(customer),
    );
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: CustomerDTO,
  ): Promise<CustomerDTO> {
    const customer = this.customerPresenter.fromDtoToDomain(dto);

    return this.customerPresenter.fromDomainToDTO(
      await this.updateCustomerService.call(customer),
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteCustomerService.call(id);
  }

  @Get()
  async findAll(): Promise<CustomerDTO[]> {
    const customers = await this.findAllCustomersService.call();

    return customers.map(this.customerPresenter.fromDomainToDTO);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<CustomerDTO> {
    const customer = await this.findCustomerByIdService.call(id);

    return this.customerPresenter.fromDomainToDTO(customer);
  }
}

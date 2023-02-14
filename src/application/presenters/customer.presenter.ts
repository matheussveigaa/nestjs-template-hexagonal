import { Injectable } from '@nestjs/common';
import { Customer } from 'src/domain/entities/customer.entity';
import { CustomerDTO } from '../dtos/customer.dto';

@Injectable()
export class CustomerPresenter {
  fromDtoToDomain(dto: CustomerDTO): Customer {
    if (!dto) return undefined;

    const domain = new Customer();

    domain.id = dto.id;
    domain.name = dto.name;
    domain.document = dto.document.number;

    return domain;
  }

  fromDomainToDTO(domain: Customer): CustomerDTO {
    if (!domain) return undefined;

    const dto = new CustomerDTO();

    dto.id = domain.id;
    dto.name = domain.name;
    dto.document = { number: domain.document, type: undefined };

    return dto;
  }
}

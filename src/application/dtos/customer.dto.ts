import { ApiProperty } from '@nestjs/swagger';

export class DocumentDTO {
  @ApiProperty()
  number: string;

  @ApiProperty()
  type: string;
}

export class CustomerDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  document: DocumentDTO;
}

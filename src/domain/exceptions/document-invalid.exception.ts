import { DomainException } from '@domain/exceptions/domain.exception';

export class DocumentInvalidException extends DomainException {
  constructor() {
    super('Documento inválido.');
  }
}

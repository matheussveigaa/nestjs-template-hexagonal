import { DocumentType } from '@domain/enums/document-type.enum';

export class Customer {
  id: string;
  name: string;
  document: string;
  documentType: DocumentType;

  isDocumentValid(): boolean {
    return !!this.document && this.isDocumentTypeValid();
  }

  isDocumentTypeValid(): boolean {
    return Object.keys(DocumentType).includes(this.documentType);
  }
}

export class Customer {
  id: string;
  name: string;
  document: string;

  isDocumentValid(): boolean {
    return !!this.document;
  }
}

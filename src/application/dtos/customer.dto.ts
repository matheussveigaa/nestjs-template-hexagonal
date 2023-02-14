export type DocumentDTO = {
  number: string;
  type: string;
};

export class CustomerDTO {
  id: string;
  name: string;
  document: DocumentDTO;
}

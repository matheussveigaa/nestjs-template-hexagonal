import { DocumentType } from '@domain/enums/document-type.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CustomerSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column({ default: DocumentType.CPF })
  documentType: string;
}

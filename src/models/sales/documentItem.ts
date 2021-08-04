
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import Invoice from './document'
import Project from '../base/project';

@Entity("salesDocumentItem")
export default class DocumentItem {
  
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 20, nullable: true })
  code?: string;
  
  @Column({ length: 50, nullable: true })
  description?: string;

  @Column({ length: 20, nullable: true })
  unity?: string;
  
  @Column()
  quantity: number;
  
  @Column()
  price: number;
  
  @Column()
  grossTotal: number;
  
  @Column({ length: 10, nullable: true })
  vatCode?: string;

  @Column()
  vatTotal: number;

  @Column()
  total: number;

  @Column({ length: 10, nullable: true })
  status?: string;

  @ManyToOne(() => Project, project => project.orderItems)
  @JoinColumn({ name: 'projectId' })
  project?: Project;

  @ManyToOne(() => Invoice, inv => inv.id)
  @JoinColumn({ name: 'invoiceId' })
  invoice?: string;

  @Column()  
  json?: string;
}


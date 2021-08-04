
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne, JoinColumn,OneToMany } from "typeorm";
import InvoiceItem from './documentItem'
import SalesDocumentType from './typeDoc'
import SalesDocumentSerie from './serieDoc';

@Entity("salesDocument")
export default class Document  {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(()=> SalesDocumentType, item => item.code)
  @JoinColumn({name:'type'})
  type?: SalesDocumentType;

  @ManyToOne(()=> SalesDocumentSerie, item => item.code)
  @JoinColumn({name:'serie'})
  serie?: SalesDocumentSerie;

  @Column()
  number: number;

  @Column({length: 50, nullable:false })  
  code?: string

  @Column()
  date: Date;

  customer?: number
  
  @Column({length: 50, nullable:false })  
  name?: string;

  @Column({length: 10, nullable:true })
  status?: string;

  @Column({nullable:true})
  vatTotal?: number;

  @Column()
  discountTotal?: number;

  @Column()
  grossTotal: number

  @Column()
  total?: number;

  @OneToMany(()=> InvoiceItem, item => item.invoice,{
    cascade:['insert','update']
  })  
  
  items?: InvoiceItem[]

  @Column()  
  json?: string;
}

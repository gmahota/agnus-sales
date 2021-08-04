import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne, JoinColumn,OneToMany } from "typeorm";
import OrderItem from './orderItem';
import Invoice from './document';

@Entity("order")
export default class Order  {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({length: 50, nullable:false })  
  code?: string

  @Column()
  date?: Date;

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
  grossTotal?: number

  @Column()
  total?: number;

  @OneToMany(()=> OrderItem, item => item.order,{
    cascade:['insert','update']
  })
  items?: OrderItem[]
  
  Invoices?: Invoice[]
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne, JoinColumn,OneToMany } from "typeorm";
import OrderItem from './orderItem';
import Invoice from './invoice';

@Entity("orders")
export default class Order {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({length: 50, nullable:false })  
  code?: string

  @Column()
  date: Date;

  customer?: number
  
  @Column({length: 50, nullable:false })  
  name?: string;

  @Column({length: 10, nullable:true })
  status?: string;

  @Column({length: 10, nullable:true })
  vat?: string;

  @Column()
  total?: number;

  @OneToMany(()=> OrderItem, item => item.order,{
    cascade:['insert','update']
  })
  items?: OrderItem[]
  
  Invoices?: Invoice[]

  constructor() {
    this.date = new Date();
  }
}

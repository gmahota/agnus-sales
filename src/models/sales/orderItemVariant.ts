import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import OrderItem from "./orderItem";

@Entity("orderItemVariants")
export default class OrderItemVariant {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  quantity: number;
  @Column()
  price: number;
  @Column()
  grossTotal: number;
  @Column()
  vatTotal: number;
  @Column({ length: 10, nullable: true })
  vatCode?: string;
  @Column()
  total: number;
  @Column({ length: 10, nullable: true })
  status?: string;

  @ManyToOne(()=> OrderItem, item => item.itemVarients)
  @JoinColumn({name:'order_id'})
  orderItem:OrderItem;
}

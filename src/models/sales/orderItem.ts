import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import Order from "./order";

import OrderItemVariant from "./orderItemVariant";
import Project from './../base/project';

@Entity("orderItem")
export default class OrderItem {
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

  @ManyToOne(()=> Project, project => project.orderItems )
  @JoinColumn({name:'project_id'})
  project?: string;

  @OneToMany(()=> OrderItemVariant, item => item.orderItem,{
    cascade:['insert','update']
  })
  itemVarients?: OrderItemVariant[];

  @ManyToOne(()=> Order, order => order.items, { lazy: true } )
  @JoinColumn({name:'order_id'})
  order:Order;
}

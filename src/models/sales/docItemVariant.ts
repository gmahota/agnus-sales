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

import DocumentItem from "./documentItem";

@Entity("docItemVariants")
export default class DocItemVariants  {
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

  @ManyToOne(()=> DocumentItem, item => item.id )
  @JoinColumn({name:'documentItemId'})
  documentItem:DocumentItem;
}

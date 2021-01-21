import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToOne, JoinColumn,OneToMany } from "typeorm";

@Entity('products')
export default class  Product {
  
  @PrimaryGeneratedColumn('increment')
  id:number;
  
  @Column({length: 50, nullable:false })
  code?: string

  @Column({length: 50, nullable:false })
  description?: string

  @Column()
  price: number
}



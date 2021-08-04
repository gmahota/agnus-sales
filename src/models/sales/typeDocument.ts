
import { BaseEntity, Entity, Column, PrimaryColumn, ManyToOne,OneToOne, JoinColumn,OneToMany } from "typeorm";

@Entity("typeDocument")
export default class TypeDocument {
  
  @PrimaryColumn()
  code: string

  @Column({ length: 10, nullable: true })
  description: string

  @Column({ length: 10, nullable: true })
  type?: string
}
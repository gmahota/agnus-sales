
import { BaseEntity, Entity, Column, PrimaryColumn, ManyToOne,OneToOne, JoinColumn,OneToMany } from "typeorm";

@Entity("salesDocumentSerie")
export default class DocumentSerie {
  
  @PrimaryColumn()
  code: string

  @Column({ length: 10, nullable: true })
  description: string

  @Column({ length: 10, nullable: true })
  begin?: string

  @Column({ length: 10, nullable: true })
  end?: string
}


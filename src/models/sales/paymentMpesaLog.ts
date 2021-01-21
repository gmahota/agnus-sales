import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Order from "./order";
import Payment from "./payment";

@Entity("paymentMpesaLogs")
export default class PaymentMpesaLog {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => Payment, {
    cascade: true,
    onDelete: "CASCADE",
    primary: true,
  })
  payment: Payment;

  @Column()
  date: Date;

  @Column({length: 50, nullable:true })
  conversation?: string;

  @Column({length: 20, nullable:true })
  transaction?: string;

  @Column({length: 20, nullable:true })
  statusText?: string;

  @Column({length: 20, nullable:true })
  status?: string;

  @Column({length: 20, nullable:true })
  reference?: string;

  @Column({length: 50, nullable:true })
  outputError?: string;

  constructor() {
    this.date = new Date();
  }
}

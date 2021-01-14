import { nameof } from "ts-simple-nameof";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import Order from "./order";
import PaymentMpesaLog from "./paymentMpesaLog";

@Entity("payments")
export default class Payment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  date: Date;

  @Column({length: 20, nullable:false })
  phoneNumber: string;

  @Column()
  reference: number;

  @Column()
  transaction: number;

  @Column()
  amount: number;

  @Column({length: 10, nullable:true })
  type?: string;

  @Column({length: 20, nullable:true })
  status?: string;

  @OneToOne(() => Order)
  @JoinColumn({ name: "order_id" })
  order?: Order;

  @OneToOne(() => PaymentMpesaLog)
  @JoinColumn({
    name: nameof<Payment>((p) => p.id),
    referencedColumnName: nameof<PaymentMpesaLog>((u) => u.id),
  })
  paymentMpesaLog?: PaymentMpesaLog;

  constructor() {
    this.date = new Date();
  }
}

import {Entity,Column,PrimaryGeneratedColumn, ManyToOne,JoinColumn} from 'typeorm';

@Entity('company')
export default class Company {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({length: 50, nullable:false })
    code?:string;

    @Column({length: 50, nullable:false })
    name?:string;
    
    @Column({length: 50, nullable:true })
    address?:string;

    @Column({length: 20, nullable:true })
    vat?:string;

    @Column({length: 50, nullable:true })
    province?: string;
    
    @Column({length: 20, nullable:false })
    phoneNumber:string;

    @Column({length: 20, nullable:false })
    cellphone:string;

    @Column({length: 100, nullable:false })
    email:string;

    @Column()
    status?:string;

    orders?:Order[];

    @Column()
    json?:string;
}
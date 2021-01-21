import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"

@Entity("users")
export default class User {   

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;
  
  @Column()
  name: string;
  
  @Column()
  firstName?: string;
  
  @Column()
  lastName?: string;
  
  @Column()
  email?: string;

  @Column()
  phoneNumber?: string;
  
  @Column()
  password: string;
  
  @Column()
  confirmPassword: boolean;
  
  @Column()
  inactive: boolean;
  
  @Column()
  country: string;

  constructor(){
    this.firstName= ""
    this.firstName= "",
    this.email= "",
    this.phoneNumber= "",
    this.confirmPassword= false,
    this.country="Moz"
  } 
}

export {
  //UserSchema,
  User,
};

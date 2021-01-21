import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createUser1608395264708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'users',
            columns:[
                {
                    name:'id',
                    type:'varchar(20)',
                    isPrimary:true
                },
                {
                    name:'username',
                    type:'varchar(50)'
                },
                {
                    name:'name',
                    type:'varchar(50)'
                },
                {
                    name:'firstName',
                    type:'varchar(50)',
                    isNullable:true
                },
                {
                    name:'lastName',
                    type:'varchar(50)',
                    isNullable:true
                },
                {
                    name:'phoneNumber',
                    type:'varchar(20)',
                    isNullable:true
                },
                {
                    name:'email',
                    type:'varchar(50)',
                    isNullable:true
                },
                {
                    name:'password',
                    type:'varchar(50)'
                },
                {
                    name:'confirmPassword',
                    type:'bit'
                },
                {
                    name:'inactive',
                    type:'bit'
                },
                {
                    name:'country',
                    type:'varchar(10)',
                    isNullable:true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}

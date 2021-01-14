import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createCustomers1609113565186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'customers',
            columns:[
                {
                    name:'id',
                    type:'varchar(20)',
                    isPrimary:true
                },
                {
                    name:'name',
                    type:'varchar(50)',
                    isNullable:true
                },
                {
                    name:'address',
                    type:'varchar(50)',
                    isNullable:true
                },
                {
                    name:'vat',
                    type:'varchar(20)',
                    isNullable:true
                },
                {
                    name:'phoneNumber',
                    type:'varchar(20)',
                    isNullable:false
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers");
    }

}

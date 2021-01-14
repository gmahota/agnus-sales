import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPaymentsMpesaLogs1609359172763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'paymentMpesaLogs',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                }, 
                {
                    name: 'date',
                    type: 'datetime',
                    isNullable: false
                },
                {
                    name: 'conversation',
                    type: 'varchar(50)',
                    isNullable: true
                },
                {
                    name: 'transaction',
                    type: 'varchar(20)',
                    isNullable: true
                },
                {
                    name: 'statusText',
                    type: 'varchar(20)',
                    isNullable: false
                },
                {
                    name: 'status', 
                    type: 'nvarchar(20)', 
                    isNullable: true
                },
                {
                    name: 'reference', 
                    type: 'varchar(50)', 
                    isNullable: true
                },
                {
                    name: 'outputError', 
                    type: 'varchar(50)', 
                    isNullable: true
                },
                
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("paymentMpesaLogs");
    }

}

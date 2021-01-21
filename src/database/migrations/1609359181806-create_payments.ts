import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPayments1609359181806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'payments',
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
                    name: 'phoneNumber',
                    type: 'varchar(20)',
                    isNullable: false
                },
                {
                    name: 'reference',
                    type: 'varchar(50)',
                    isNullable: true
                },
                {
                    name: 'transaction',
                    type: 'varchar(50)',
                    isNullable: false
                },
                {
                    name: 'amount', 
                    type: 'float'
                },
                {
                    name: 'type',
                    type: 'varchar(10)',
                    isNullable: true
                },
                {
                    name: 'status',
                    type: 'varchar(10)',
                    isNullable: true
                },
                {
                    name: 'order_id', 
                    type: 'int', 
                    isNullable: true
                },
                {
                    name: 'paymentMpesaLogs_id', 
                    type: 'int', 
                    isNullable: true
                },
            ],
            foreignKeys:[
                {
                    name:'PaymentOrder',
                    columnNames:['order_id'],
                    referencedTableName:'orders',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE'
                },
                {
                    name:'PaymentMpesaLog',
                    columnNames:['paymentMpesaLogs_id'],
                    referencedTableName:'paymentMpesaLogs',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("payments");
    }

}

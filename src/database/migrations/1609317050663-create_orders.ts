import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrders1609317050663 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'date',
                    type: 'datetime',
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar(50)',
                    isNullable: false
                },
                {
                    name: 'province',
                    type: 'varchar(20)',
                    isNullable: true
                },
                {
                    name: 'phoneNumber',
                    type: 'varchar(20)',
                    isNullable: false
                },
                {
                    name: 'status', 
                    type: 'nvarchar(10)', 
                    isNullable: true
                },
                {
                    name: 'publication_id', 
                    type: 'varchar(50)', 
                    isNullable: true
                },
            ],
            foreignKeys:[
                {
                    name:'OrderPublication',
                    columnNames:['publication_id'],
                    referencedTableName:'publications',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}

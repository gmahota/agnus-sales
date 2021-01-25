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
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("orders");
    }

}

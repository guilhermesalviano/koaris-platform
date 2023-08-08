import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateContacts1691511576131 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'contacts',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    }, {
                        name: 'name',
                        type: 'varchar',
                        isNullable: true
                    }, {
                        name: 'email',
                        type: 'varchar',
                        isNullable: true
                    }, {
                        name: 'phone',
                        type: 'varchar',
                        isNullable: true
                    }, {
                        name: 'source',
                        type: 'varchar',
                        isNullable: true
                    }, {
                        name: 'organization_id',
                        type: 'uuid'
                    }, {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }, {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ], foreignKeys: [
                    {
                        name: 'FKOrganization',
                        referencedTableName: 'organizations',
                        referencedColumnNames: ['id'],
                        columnNames: ['organization_id'],
                        onDelete: 'CASCADE'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

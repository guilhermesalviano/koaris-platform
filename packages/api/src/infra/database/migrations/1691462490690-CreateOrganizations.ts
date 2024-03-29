import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrganizations1691462490690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "organizations",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    }, {
                        name: "description",
                        type: "varchar"
                    }, {
                        name: "logo",
                        type: "varchar",
                        isNullable: true
                    }, {
                        name: "identification",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false
                    }, {
                        name: "user_id",
                        type: "uuid"
                    }, {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }, {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("organizations");
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateConfigurations1691872751124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "configurations",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, {
                        name: "organization_id",
                        type: "uuid"
                    }, {
                        name: "service_id",
                        type: "uuid"
                    }, {
                        name: "logoCustom",
                        type: "varchar",
                        isNullable: true
                    }, {
                        name: "phone",
                        type: "varchar"
                    }, {
                        name: "socialLinks",
                        type: "varchar",
                        isNullable: true
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
                        name: "FKOrganization",
                        referencedTableName: "organizations",
                        referencedColumnNames: ["id"],
                        columnNames: ["organization_id"],
                        onDelete: "CASCADE"
                    }, {
                        name: "FKService",
                        referencedTableName: "services",
                        referencedColumnNames: ["id"],
                        columnNames: ["service_id"],
                        onDelete: "CASCADE"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("configurations");
    }

}

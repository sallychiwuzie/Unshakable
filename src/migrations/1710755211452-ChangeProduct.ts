import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProduct1710755211452 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\"" +
            " ADD COLUMN \"external\" int DEFAULT 1"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\" DROP COLUMN \"external\""
        )
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeProduct1710498327183 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\"" +
            " ADD COLUMN \"gender\" text"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\" DROP COLUMN \"gender\""
        )
    }

}

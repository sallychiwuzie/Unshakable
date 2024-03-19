import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeProduct1710755211452 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'products',
			new TableColumn({
				name: 'ds',
				type: 'boolean',
				isNullable: true,
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('ALTER TABLE "product" DROP COLUMN "external"');
	}
}

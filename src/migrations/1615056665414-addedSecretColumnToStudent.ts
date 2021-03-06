import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddedSecretColumnToStudent1615056665414
    implements MigrationInterface {
    name = 'addedSecretColumnToStudent1615056665414';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "student" ADD "secret" character varying NOT NULL`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "secret"`);
    }
}

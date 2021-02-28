import { MigrationInterface, QueryRunner } from 'typeorm';

export default class NewEmailStudentColumn1614528664969
    implements MigrationInterface {
    name = 'NewEmailStudentColumn1614528664969';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "student" ADD "email" character varying`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }
}

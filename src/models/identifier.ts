import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    TableInheritance,
} from 'typeorm';

export default abstract class Identifier {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @CreateDateColumn({ name: 'updated_At' })
    updatedAt: Date;
}

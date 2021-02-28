import { IsEmail, MaxLength, MinLength } from 'class-validator';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Class from './class';

@Entity()
export default class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 45 })
    @MaxLength(45)
    @MinLength(2)
    name: string;

    @Column({ type: 'varchar', length: 45 })
    @MaxLength(45)
    key: string;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

    @Column({ nullable: true })
    @IsEmail()
    email: string;

    @ManyToMany(() => Class)
    @JoinTable()
    classes: Class[];
}

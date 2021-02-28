import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Lesson from './lesson';

@Entity() // @Entity('classes') caso o nome da tabela no bd seja diferente da entitade.
export default class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 100,
        unique: true,
    })
    name: string;

    @Column()
    duration: number;

    @Column()
    semester: number;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

    @OneToMany(() => Lesson, lesson => lesson.classe)
    lessons: Lesson[];
}

import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Class from './class';
import Content from './content';

@Entity()
export default class Lesson {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

    @OneToOne(() => Content, content => content.lesson)
    content: Content;

    @ManyToOne(() => Class, classe => classe.lessons)
    classe: Class;
}

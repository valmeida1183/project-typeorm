import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Lesson from './lesson';

@Entity()
export default class Content {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 250,
        transformer: {
            from: (value: string): string => value.toLowerCase(),
            to: (value: string): string => value.toUpperCase(),
        },
    })
    description: string;

    @Column({ type: 'varchar', length: 45 })
    linkContent: string;

    @OneToOne(() => Lesson, lesson => lesson.content)
    @JoinColumn()
    lesson: Lesson;
}

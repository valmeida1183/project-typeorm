import { Column, Entity } from 'typeorm';
import Identifier from './identifier';

@Entity()
export default class University {
    @Column(() => Identifier)
    identification: Identifier;

    @Column()
    graduations: string;

    @Column()
    doctors: string;

    @Column()
    masters: string;
}

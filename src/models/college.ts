import { Column, Entity } from 'typeorm';
import Identifier from './identifier';

@Entity()
export default class College {
    @Column(() => Identifier)
    identification: Identifier;

    @Column()
    graduations: string;

    @Column()
    year: number;
}

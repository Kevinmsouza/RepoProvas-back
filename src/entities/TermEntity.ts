import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Subject from './SubjectEntity';

@Entity('terms')
export default class Term {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => Subject, (subject) => subject.term)
        subjects: Subject[];
}

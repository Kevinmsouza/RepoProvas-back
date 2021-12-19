import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany,
} from 'typeorm';
import Subject from './SubjectEntity';
import Test from './TestEntity';

@Entity('teachers')
export default class Teacher {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => Test, (test) => test.teacher)
        tests: Test[];

    @ManyToMany(() => Subject, (subject) => subject.id, { eager: true })
        subjects: Subject[];
}

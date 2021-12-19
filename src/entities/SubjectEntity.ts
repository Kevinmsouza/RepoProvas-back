import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable,
} from 'typeorm';
import Teacher from './TeacherEntity';
import Term from './TermEntity';
import Test from './TestEntity';

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @ManyToOne(() => Term, (term) => term.subjects)
        term: Term;

    @OneToMany(() => Test, (test) => test.subject)
        tests: Test[];

    @ManyToMany(() => Teacher, (teacher) => teacher.id, { eager: true })
        @JoinTable({
            name: 'subjects_teachers',
        })
        teachers: Teacher[];
}

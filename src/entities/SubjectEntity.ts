import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, JoinColumn,
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

    @ManyToOne(() => Term, (term) => term.subjects, { eager: true })
        @JoinColumn({ name: 'termId' })
        term: Term;

    @OneToMany(() => Test, (test) => test.subject)
        tests: Test[];

    @ManyToMany(() => Teacher, (teacher) => teacher.id, { eager: true })
        @JoinTable({
            name: 'subjects_teachers',
            joinColumn: {
                name: 'subjectId',
                referencedColumnName: 'id',
            },
            inverseJoinColumn: {
                name: 'teacherId',
                referencedColumnName: 'id',
            },
        })
        teachers: Teacher[];

    getSubject() {
        return {
            id: this.id,
            name: this.name,
            term: this.term,
            teachers: this.teachers,
            testsQtd: this.tests.length,
        };
    }
}

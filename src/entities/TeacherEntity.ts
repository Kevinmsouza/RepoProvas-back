import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable,
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
        @JoinTable({
            name: 'subjects_teachers',
            joinColumn: {
                name: 'teacher_id',
                referencedColumnName: 'id',
            },
            inverseJoinColumn: {
                name: 'subject_id',
                referencedColumnName: 'id',
            },
        })
        subjects: Subject[];
}

import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import Category from './CategoryEntity';
import Subject from './SubjectEntity';
import Teacher from './TeacherEntity';

@Entity('tests')
export default class Test {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @ManyToOne(() => Category, (category) => category.tests)
        category: Category;

    @ManyToOne(() => Subject, (subject) => subject.tests)
        subject: Subject;

    @ManyToOne(() => Teacher, (teacher) => teacher.tests)
        teacher: Teacher;

    @Column()
        url: string;
}

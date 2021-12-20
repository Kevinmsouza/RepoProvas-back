import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
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

    @Column()
        categoryId: number;

    @Column()
        subjectId: number;

    @Column()
        teacherId: number;

    @ManyToOne(() => Category, (category) => category.tests)
        @JoinColumn({ name: 'categoryId' })
        category: Category;

    @ManyToOne(() => Subject, (subject) => subject.tests, { eager: true })
        @JoinColumn({ name: 'subjectId' })
        subject: Subject;

    @ManyToOne(() => Teacher, (teacher) => teacher.tests, { eager: true })
        @JoinColumn({ name: 'teacherId' })
        teacher: Teacher;

    @Column()
        url: string;
}

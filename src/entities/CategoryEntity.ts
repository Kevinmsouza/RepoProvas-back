import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Test from './TestEntity';

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => Test, (test) => test.category)
        tests: Test[];

    getTestsByCategory() {
        return {
            id: this.id,
            name: this.name,
            tests: this.tests.map((test) => ({
                id: test.id,
                name: test.name,
                url: test.url,
                subject: {
                    id: test.subject.id,
                    name: test.subject.name,
                    term: test.subject.term.name,
                },
                teacher: {
                    id: test.teacher.id,
                    name: test.teacher.name,
                },
            })),
        };
    }
}

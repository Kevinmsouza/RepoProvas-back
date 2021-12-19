import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Test from './TestEntity';

@Entity('teachers')
export default class Teacher {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToMany(() => Test, (test) => test.teacher)
        tests: Test[];
}

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
}

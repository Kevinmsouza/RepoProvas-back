import { getRepository } from 'typeorm';
import Category from '../entities/CategoryEntity';
import Test from '../entities/TestEntity';

interface TestCreate {
    name: string;
    categoryId: number;
    subjectId: number;
    teacherId: number;
    url: string;
}

async function createTest(test: TestCreate) {
    const newTest = await getRepository(Test).create(test);
    await getRepository(Test).save(newTest);
    return newTest;
}

async function listTestsByCategory() {
    const categories = await getRepository(Category).find({ relations: ['tests'] });
    return categories.map((category) => category.getTestsByCategory());
}

export {
    createTest,
    listTestsByCategory,
};

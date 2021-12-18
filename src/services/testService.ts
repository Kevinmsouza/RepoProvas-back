import { getRepository } from 'typeorm';
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

export {
    createTest,
};

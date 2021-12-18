import { getRepository } from 'typeorm';
import Test from '../../src/entities/TestEntity';

function getNewTestBody() {
    return {
        name: '2020.01',
        categoryId: 1,
        subjectId: 1,
        teacherId: 1,
        url: 'https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url',
    };
}

async function createTest() {
    const user = await getRepository(Test).create(getNewTestBody());

    await getRepository(Test).save(user);

    return user;
}

export {
    createTest,
    getNewTestBody,
};

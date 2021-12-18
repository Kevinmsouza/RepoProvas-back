import { getRepository } from 'typeorm';
import Test from '../../src/entities/TestEntity';

async function clearDatabase() {
    await getRepository(Test).delete({});
}

export {
    clearDatabase,
};

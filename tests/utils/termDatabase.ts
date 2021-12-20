import { getRepository } from 'typeorm';
import Term from '../../src/entities/TermEntity';

async function clearDatabase() {
    await getRepository(Term).delete({});
}

export {
    clearDatabase,
};

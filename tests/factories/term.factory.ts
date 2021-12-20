import { getRepository } from 'typeorm';
import Term from '../../src/entities/TermEntity';

async function createTerm() {
    const term = await getRepository(Term).create({
        name: 'term',
    });

    await getRepository(Term).save(term);

    return term;
}

export {
    createTerm,
};

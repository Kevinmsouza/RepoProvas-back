import { getRepository } from 'typeorm';
import Term from '../entities/TermEntity';

async function listTerms() {
    const terms = await getRepository(Term).find();
    return terms;
}

export {
    listTerms,
};

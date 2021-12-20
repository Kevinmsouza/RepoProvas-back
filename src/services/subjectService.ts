import { getRepository } from 'typeorm';
import Subject from '../entities/SubjectEntity';

async function listSubjects() {
    const subjects = await getRepository(Subject).find({ relations: ['tests'] });
    return subjects.map((subject) => subject.getSubject());
}

export {
    listSubjects,
};

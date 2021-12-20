import { getRepository } from 'typeorm';
import Subject from '../entities/SubjectEntity';

async function listSubjects() {
    const subjects = await getRepository(Subject).find();
    return subjects.map((subject) => subject.getSubject());
}

export {
    listSubjects,
};

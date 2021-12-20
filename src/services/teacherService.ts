import { getRepository } from 'typeorm';
import Teacher from '../entities/TeacherEntity';

async function listTeachers() {
    const teachers = await getRepository(Teacher).find();
    return teachers.map((teacher) => teacher.getTeacher());
}

export {
    listTeachers,
};

import { getManager } from 'typeorm';

async function listTeachers() {
    const teachers = await getManager().query(`
        SELECT * FROM teachers
        LIMIT 1000
    ;`);
    return teachers;
}

export {
    listTeachers,
};

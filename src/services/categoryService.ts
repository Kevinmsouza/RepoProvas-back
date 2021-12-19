import { getRepository } from 'typeorm';
import Category from '../entities/CategoryEntity';

async function listCategorys() {
    const categorys = await getRepository(Category).find();
    return categorys;
}

export {
    listCategorys,
};

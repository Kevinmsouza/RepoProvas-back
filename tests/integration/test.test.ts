/* eslint-disable no-undef */
import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';
import * as testFactory from '../factories/test.factory';
import * as testDatabase from '../utils/testDatabase';

beforeAll(async () => {
    await init();
});

beforeEach(async () => {
    await testDatabase.clearDatabase();
});

afterAll(async () => {
    await getConnection().close();
});

describe('POST /tests', () => {
    it('should answer status 201 for success', async () => {
        const response = await supertest(app)
            .post('/tests')
            .send(testFactory.getNewTestBody());
        expect(response.status).toBe(201);
    });
    it('should answer status 400 for invalid body', async () => {
        const response = await supertest(app)
            .post('/tests')
            .send({ name: '2020' });
        expect(response.status).toBe(400);
    });
});

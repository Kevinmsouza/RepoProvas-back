/* eslint-disable no-undef */
import supertest from 'supertest';
import { getConnection } from 'typeorm';

import app, { init } from '../../src/app';
import * as termFactory from '../factories/term.factory';

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});

describe('GET /terms', () => {
    it('should answer with valid body and status 200', async () => {
        const term = await termFactory.createTerm();

        const response = await supertest(app).get('/terms');

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: term.name,
                }),
            ]),
        );

        expect(response.status).toBe(200);
    });
});

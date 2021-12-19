import './setup';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import testRouter from './Routers/testRouter';
import teacherRouter from './Routers/teacherRouter';
import subjectRouter from './Routers/subjectRouter';
import categoryRouter from './Routers/categoryRouter';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/check-status', (req, res) => {
    res.sendStatus(200);
});
app.use('/tests', testRouter);
app.use('/teachers', teacherRouter);
app.use('/subjects', subjectRouter);
app.use('/categories', categoryRouter);
app.use(errorMiddleware);

export async function init() {
    await connectDatabase();
}

export default app;

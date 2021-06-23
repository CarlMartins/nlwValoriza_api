import 'reflect-metadata';
import express, { Request, Response, NextFunction, response } from 'express';
import "express-async-errors";
import { router } from './routes/routes';
import { errorHandler } from './middlewares/errorHandler';
import './database';

const app = express();
app.use(express.json());

app.use(router);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running http://localhost:3000');
});
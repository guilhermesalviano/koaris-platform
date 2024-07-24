import express from 'express';
import routes from './routes';
import path from 'path';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const app = express()

app.use(
	cors({
        origin: process.env.FRONTURL || "http://localhost:3000",
	})
);

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('../swaggerOptions');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.use(routes);

export default app;
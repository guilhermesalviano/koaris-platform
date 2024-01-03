import express from 'express';
import routes from './routes';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const app = express()

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('../swaggerOptions');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
app.use(routes);

export default app;
import express from 'express';
import routes from './routes';
import "dotenv/config";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swaggerOptions';

const app = express()

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

export default app;
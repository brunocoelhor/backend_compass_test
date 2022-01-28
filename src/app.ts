import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import { routes } from './routes/routes';

import 'dotenv/config';
import swaggerDocs from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
    });
}

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

export { app };

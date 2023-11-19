import express, { Request, Response } from 'express';
import { version, name } from './meta';
import logger from './logger/logger';

const app = express();

app.get('/', (req: Request, res: Response) => {
    logger.info(`Getting home endpoint`, {
        context: 'home',
    });
    res.send(name());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Running on ${PORT}. ${version()}`, {
        context: 'listen',
        port: PORT,
        version: version(),
    });
});

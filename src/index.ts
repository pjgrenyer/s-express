import express, {Request, Response} from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('hello typescript');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

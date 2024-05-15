import express, {Request, Response} from 'express';
import {PORT} from "./config";


const app = express();

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello World'
    });
});
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
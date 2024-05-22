import express, {Request, Response} from 'express';
import http from 'http';
import bodyParser from "body-parser";
import productRoute from "./routes/productRoute";
import dotenv from "dotenv";


dotenv.config();

const PORT = Number(process.env.API_PORT);
const app = express();

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello World'
    });
});
//


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/products', productRoute);

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
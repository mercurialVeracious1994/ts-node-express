import express from 'express';
import http from 'http';
import bodyParser from "body-parser";
import productRoute from "./routes/productRoute";
import dotenv from "dotenv";
import postRoute from "./routes/postRoute";
import userRoute from "./routes/userRoute";
import {buildAssociation} from "../database/models";


dotenv.config();

const PORT = Number(process.env.API_PORT);
const app = express();

buildAssociation();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server is connected on ${PORT}`))
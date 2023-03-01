import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import { registerHandler } from './mng/register';


const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get('/api/register', registerHandler);


app.listen(8080, () => console.log('Server is running'));

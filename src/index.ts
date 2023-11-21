import express from 'express';
import dotenv from "dotenv"

import route from './routes';

import { connectToDatabase } from './db/mongoose';
import morgan from './utils/serverLogs/morgan'
import cors from './utils/cors'

const app = express();
app.use(express.json());
app.use(morgan)
app.use(cors)

const app = express();


app.use(express.json());
dotenv.config()

app.get('/', (req, res) => {
  res.send('Welcome!');
});


app.use("/api", route)

const PORT = process.env.PORT
console.log(PORT);


app.listen(3000, async() => {
  await connectToDatabase()
  console.log('Server listening on port 3000');
});
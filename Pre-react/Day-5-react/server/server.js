import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import dbcon from './db/db.js';
const app = express();

app.get('/', (req, res) => {
  res.send('server is running');
});

app.get('/api', (req, res) => {
  res.send('api is running');
});

const port = process.env.port;

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});

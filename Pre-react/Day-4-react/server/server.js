const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
const mod = require('./routes/registerroutes');

const db = require('./db/bd')
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', mod);

app.get('/', (req, res) => {
  res.send('api is running....');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

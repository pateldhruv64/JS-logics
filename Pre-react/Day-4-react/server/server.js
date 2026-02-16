const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db/bd');
const mod = require('./routes/registerroutes');
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

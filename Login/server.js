const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/db/db.js");
const registerroutes = require("./src/routes/registerroutes.js");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/register", registerroutes);

app.get("/", (req, res) => {
  res.send("api is running....");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

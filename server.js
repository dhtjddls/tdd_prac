const express = require('express');
const route = require('./routes/route');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api', route);

app.listen(PORT, HOST);
console.log(`Running on port ${PORT}`);

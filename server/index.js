const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "MongoDB connection error:"));
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const weddingRoutes = require('./routes/weddings');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

app.use('/api/weddings', weddingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


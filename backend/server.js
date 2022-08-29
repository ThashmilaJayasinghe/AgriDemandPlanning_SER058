const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')

const port = process.env.PORT || 8000;
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.listen(port, ()=>console.log(`Server is running on port no : ${port}`))

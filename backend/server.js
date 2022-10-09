const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')

const port = process.env.PORT || 8000;
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/farmers', require('./routes/farmers.routes'));
app.use('/api/buyer',require('./routes/buyers.routes'));
app.use('/api/seller', require('./routes/sellers.routes'));
app.use('/api/seed-request', require('./routes/seedRequest.routes'));
app.use('/api/message', require('./routes/message.routes'));
app.use('/api/crops', require('./routes/crops.routes'));


app.listen(port, ()=>console.log(`Server is running on port no : ${port}`))

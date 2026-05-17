const express = require('express');
const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = require('./config/dbConnection');
const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();

const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
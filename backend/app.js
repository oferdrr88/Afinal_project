const express = require('express');
const app = express();

const errorMiddleware = require('./middlelwares/errors');

app.use(express.json());

// import  all route

const products = require('./routes/products');

app.use('/api/v1', products);

//Middleware to handele errors
app.use(errorMiddleware);

module.exports = app;

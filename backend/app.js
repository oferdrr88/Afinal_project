const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const errorMiddleware = require('./middlelwares/errors');

app.use(express.json());
app.use(cookieParser());

// import  all route

const products = require('./routes/products');
const auth = require('./routes/auth');

app.use('/api/v1', products);
app.use('/api/v1', auth);

//Middleware handel error
app.use(errorMiddleware);

module.exports = app;

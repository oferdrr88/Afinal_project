const express = require('express');
const app = express();

app.use(express.json());

// import  all route

const products = require('./routes/products');

app.use('/api/v1', products);

module.exports = app;

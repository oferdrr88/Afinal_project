// const { request } = require('./app');
// const express = require('express');
// const app = express();
// // const app = require('./app');
// const connectDatabase = require('./config/database');

// const dotenv = require('dotenv');

// // // set config
// config({ path: 'backend/config/config.env' });

// // // conect database
// connectDatabase();

// listen(process.env.PORT, () => {
//     console.log(`server start on port,${process.env.PORT} in ${process.env.NODE_ENV} mode `);
// });
// module.exports = app;

const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });

//  conect database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server start on port,${process.env.PORT} in ${process.env.NODE_ENV} mode `);
});

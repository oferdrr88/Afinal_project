const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');

//handele Uncode exceptions
process.on('uncaughtException', (err) => {
    console.log(`ERROR:,${err.messge}`);
    console.log('ERROR: shot down server');
    process.exit(1);
});

dotenv.config({ path: 'backend/config/config.env' });

//  conect database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server start on port,${process.env.PORT} in ${process.env.NODE_ENV} mode `);
});

//handel unhandel promise rejctions
process.on('unhandel promise rejctions', (err) => {
    console.log(`ERROR: ${err.messge}`);
    console.log('ERROR: shot down server unhandel promise rejctions');
    server.close(() => {
        process.exit(1);
    });
});

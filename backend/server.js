const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');
dotenv.config({ path: 'backend/config/config.env' });

//  conect database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server start on port,${process.env.PORT} in ${process.env.NODE_ENV} mode `);
});

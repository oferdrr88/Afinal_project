const product = require('../models/products');
const dotenv = require('dotenv');
const connectDatabase = req('../config/database');
const product = require('../data/products');
const products = require('../models/products');

//seting dotenv file
dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProduct = async () => {
    try {
        await product.deleteMany();
        console.log('products are drleted');

        await product.insertMany(products);
        console.log(' All products are added');
        process.exitCode();
    } catch (error) {
        console.log(error.masge);
        process.exitCode();
    }
};

seedProduct();

const Product = require('../models/products');
const ErrorHandler = require('../utils/errorHandeler');
const APIFeatures = require('../utils/apiFeatures');
//create new.product  => /api/v1/product/new

exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
};

// get all products => /api/v1/products

exports.getProducts = async (req, res, next) => {
    const apiFeatures = new APIFeatures(Product.find(), req.query).search();
    let products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        count: products.length,
        products,
    });
};

// get single product detauls => /api/v1/product/:id

exports.getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({
        success: true,
        product,
    });
};

//update Product => api/v1/product/:id
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found',
        });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.send(200).json({
        success: true,
        product,
    });
};

// Deleted one Product => /api/v1/admin/products/:id

exports.deletedOnePProduct = async (req, res, next) => {
    product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found',
        });
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Product is Deleted',
    });
};

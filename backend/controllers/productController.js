const Product = require('../models/products');
const ErrorHandler = require('../utils/errorHandeler');
const catchAsyncError = require('../middlelwares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
//create new.product  => /api/v1/product/new

exports.newProduct = catchAsyncError(async (req, res, next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});

// get all products => /api/v1/products

exports.getProducts = catchAsyncError(async (req, res, next) => {
    const apiFeatures = new APIFeatures(Product.find(), req.query).search();
    const products = await apiFeatures.query;

    res.status(200).json({
        success: true,
        count: products.length,
        products,
    });
});

// get single product detauls => /api/v1/product/:id

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found line 33 co', 404));
    }

    res.status(200).json({
        success: true,
        product,
    });
});

//update Product => api/v1/product/:id
exports.updateProduct = catchAsyncError(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product not found line 33 co', 404));
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
});

// Deleted one Product => /api/v1/admin/products/:id

exports.deletedOnePProduct = catchAsyncError(async (req, res, next) => {
    Product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found line 33 co', 404));
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Product is Deleted',
    });
});

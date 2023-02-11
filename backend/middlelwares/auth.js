// ckecks user authenticated
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandeler');
const catchAsyncErrors = require('./catchAsyncErrors');

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler('Login before entering the products', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
});

//handling users rols

exports.authorizeRoles = (...roles) => {
    return (req, tes, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role(${req.user.role}) not allowd acccess this req`, 403));
        }
        next();
    };
};

const ErrorHandler = require('../utils/errorHandeler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.massage = err.massage || 'An internal server error exists';

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack,
        });
    }

    if (process.env.NODE_ENV === 'PRODUCTTION') {
        let error = { ...err };
        error.message = err.message;
        res.status(error.statusCode).json({
            success: false,
            massage: error.massage || ' internal server error ',
        });
        // Worng Mongoose obj ID error
        if (err.name === err.massege) {
            const massage = `REsource not found invalid : ${err.path}`;
            error = new ErrorHandler(massage, 400);
        }
    }

    // Handling Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((value) => value.message);
        error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'Internal Server Error',
    });
};

const ErrorHandler = require('../utils/errorHandele');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            error: false,
            errMessage: err.message,
            stack: err.stack,
        });
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {
        let error = { ...err };
        error.message = err.message;

        res.status(error.statusCode).json({
            success: false,
            massege: error.message || 'An internal server error has occurred',
        });
    }
};

const ErrorHandler = require('../utils/errorHandeler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.massage = err.massage || 'An internal server error exists line 5';

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

        // // Handling Mongoose Validation Error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map((value) => value.message);
            error = new ErrorHandler(message, 400);
        }
    }
    // hamdling mongoose dep key err

    if (err.code === 11000) {
        const massage = `Duplicate ${Object.Keys(err.KeyValue)} entred`;
        error = new ErrorHandler(message, 400);
    }

    // hamdling worng JWT err
    if (err.name === 'jsonWebTokenEror') {
        const message = 'JSON web  token is unvalid , TRY again';
        err = new ErrorHandler(message, 400);
    }

    // hamdling Expired   err
    if (err.name === 'TokenExpiredEror') {
        const message = 'JSON web  token isExpired , TRY again';
        err = new ErrorHandler(message, 400);
    }

    //     // Worng Mongoose obj ID error
    if (err.name === 'CastError') {
        const massage = `REsource not found invalid : ${err.path}`;
        err = new ErrorHandler(massage, 400);
    }

    res.status(err.statusCode || 500).json({
        success: false,
        // error: err.stack,
        message: err.message || 'Internal Server Error line  errors.js 22',
    });
};

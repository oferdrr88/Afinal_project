// Error Handler Class
class ErrorHandler extends Error {
    constructor(errMessage, statusCode) {
        super(errMessage);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;

// Error Handler Class
class ErrorHandler extends Error {
    constructor(errMessage, statusCode) {
        super(errMessage);
        this.errorCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;

// class error

class ErrorHandele extends Error {
    constructor(massage, stotusCode) {
        super(massage);
        this.stotusCode = stotusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandele;

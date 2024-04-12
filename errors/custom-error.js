class CustomAPIError extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (mssg,statusCode) => {
    return new CustomAPIError(mssg,statusCode)
}

module.exports = {CustomAPIError,createCustomError}
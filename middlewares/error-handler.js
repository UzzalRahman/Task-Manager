const {CustomAPIError} = require('../errors/custom-error')

const errorHandler = (err,req,res,next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({mssg: err.message})
    }
    res.status(500).json({mssg: 'Something went wrong, please try again'})
}

module.exports = errorHandler
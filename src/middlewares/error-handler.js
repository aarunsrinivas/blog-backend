import CustomError from '../errors/custom-error.js'

const errorHandler = (err, req, res, next) => {
    console.log('here')
    if(err instanceof CustomError) {
        res.status(err.status).json(err.serialize())
    } else {
        res.status(500).json([
            {message: err.message || 'Something went wrong'}
        ])
    }
}

export default errorHandler
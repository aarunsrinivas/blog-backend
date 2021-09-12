import CustomError from './custom-error.js'

class InvalidCredentialsError extends CustomError {

    status = 4000

    constructor() {
        super('Invalid credentials')
        Object.setPrototypeOf(this, InvalidCredentialsError.prototype)
    }

}

export default InvalidCredentialsError
import CustomError from './custom-error.js'

class RouteNotFoundError extends CustomError {

    status = 404

    constructor() {
        super('Route not found')
        Object.setPrototypeOf(this, RouteNotFoundError.prototype)
    }

}

export default RouteNotFoundError
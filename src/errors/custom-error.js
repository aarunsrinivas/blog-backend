class CustomError extends Error {

    constructor(message) {
        super(message)
        Object.setPrototypeOf(this, CustomError.prototype)
    }

    serialize() {
        return [{
            message: this.message
        }]
    }

}

export default CustomError
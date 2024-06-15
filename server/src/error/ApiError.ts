export class ApiError extends Error {
    public status: number;
    public message: string;

    constructor(status: number, message: string) {
        super()
        this.status = status;
        this.message = message;
        Object.setPrototypeOf(this, new.target.prototype);
    }

    static unauthorized(message: string) {
        return new ApiError(401, message);
    }

    static forbedden(message: string) {
        return new ApiError(403, message);
    }

    static badRequest(message: string) {
        return new ApiError(404, message);
    }

    static internal(message: string) {
        return new ApiError(500, message);
    }
}


export interface IError {
    status: string;
    statusCode: number
}

class ApiError extends Error implements IError {
    constructor(public statusCode: number, public status: string) {
        super();
    }
}

export default ApiError;
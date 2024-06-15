import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../error/ApiError';

export const errorHandlingMiddleware = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }

    return res.status(500).json({ error: 'unknown error' })
}
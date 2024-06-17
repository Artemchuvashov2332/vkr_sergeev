import { Request, Response, NextFunction } from "express";
import { ApiError } from "../error/ApiError";
import jsonwebtoken from "jsonwebtoken";

export const authHandlingMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.method === "OPTIONS") next();

  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (!token) return next(ApiError.unauthorized("not authorizsdfdfed!"));

    const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY);

    // @ts-expect-error
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);

    return next(ApiError.unauthorized("not authorized!"));
  }
};

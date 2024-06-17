import { Request, Response, NextFunction } from "express";
import { ApiError } from "../error/ApiError";
import jsonwebtoken from "jsonwebtoken";

export const checkRoleHandlingMiddleware = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.method === "OPTIONS") next();

    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) return next(ApiError.unauthorized("not authorizsdfdfed!"));

      const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        const { status, message } = ApiError.forbedden("not permission role!");
        return res.status(status).json(message);
      }

      // @ts-expect-error
      req.user = decoded;
      next();
    } catch (error) {
      console.log(error);

      return next(ApiError.unauthorized("not authorized!"));
    }
  };
};

export const checkForAdminRoleMiddleware = checkRoleHandlingMiddleware("ADMIN");

import { NextFunction, Request, Response } from "express";
import { User, Basket } from "../models/models";
import { ApiError } from "../error/ApiError";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const generateJwt = (id: number, login: string, role: string) =>
  jsonwebtoken.sign({ id, login, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    const { login, password, role } = req.body;

    if (!login || !password) {
      return next(ApiError.badRequest("not correct login or password"));
    }

    const candidate = await User.findOne({ where: { login } });

    if (candidate) {
      return next(ApiError.badRequest("exist user login!"));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ login, password: hashPassword, role });
    //@ts-expect-error
    const basket = await Basket.create({ userId: user.id });
    //@ts-expect-error
    const jwtToken = generateJwt(user.id, user.login, user.role);

    return res.json({ token: jwtToken });
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { login, password } = req.body;

    const user = await User.findOne({ where: { login } });

    //@ts-expect-error
    const comparedPassword = bcrypt.compareSync(password, user?.password || "");
    if (!comparedPassword) {
      return next(ApiError.unauthorized("not correct login or password!"));
    }

    //@ts-expect-error
    const jwtToken = generateJwt(user.id, user.login, user.role);

    return res.json({ token: jwtToken });
  }

  async check(reg: Request & { user }, res: Response) {
    const { user } = reg;
    const jwtToken = generateJwt(user.id, user.login, user.role);
    return res.json({ token: jwtToken });
  }
}

export const userController = new UserController();

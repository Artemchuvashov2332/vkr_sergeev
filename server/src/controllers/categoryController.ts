import { NextFunction, Request, Response } from "express";
import { CategoryControllerCreateReq } from "./types/categoryController.types";
import { ApiError } from "../error/ApiError";
import { Category } from "../models/models";
import { v4 as uuidv4 } from "uuid";
import path from "path";

class CategoryController {
  async create(
    req: CategoryControllerCreateReq,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { code, title } = req.body;

      const { image } = req.files;
      const file = Array.isArray(image) ? image[0] : image;
      const fileName = uuidv4() + ".jpg";

      const category = await Category.create({ code, title, image: fileName });
      file.mv(path.resolve(__dirname, "../..", "static", fileName));
      return res.json(category);
    } catch (e) {
      next(ApiError.badRequest(e?.message));
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      return res.json(category);
    } catch (e) {
      next(ApiError.badRequest(e?.message));
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string, 10) || 10;
      const offset = parseInt(req.query.offset as string, 10) || 0;

      const { count, rows } = await Category.findAndCountAll({
        limit,
        offset,
      });

      res.header(
        "Content-Range",
        `categories ${offset}-${offset + rows.length - 1}/${count}`
      );
      return res.json({ count, rows });
    } catch (e) {
      next(ApiError.badRequest(e?.message));
    }
  }

  async updateOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_addOne" });
  }

  async deleteOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_deleteOne" });
  }
}

export const categoryController = new CategoryController();

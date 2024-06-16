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

  async getAll(_req: Request, res: Response) {
    const catogories = await Category.findAndCountAll();
    return res.json(catogories);
  }

  async updateOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_addOne" });
  }

  async deleteOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_deleteOne" });
  }
}

export const categoryController = new CategoryController();

import { NextFunction, Request, Response } from "express";
import { TypeControllerCreateReq } from "./types/typeController.types";
import { ApiError } from "../error/ApiError";
import { Type, Category, TypeCategory } from "../models/models";
import { v4 as uuidv4 } from "uuid";
import path from "path";

class TypeController {
  async create(
    req: TypeControllerCreateReq,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { code, title, categoryId } = req.body;

      const category = await Category.findByPk(categoryId);
      if (!category) {
        return next(ApiError.badRequest("not fount correct category!"));
      }

      const { image } = req.files;
      const file = Array.isArray(image) ? image[0] : image;
      const fileName = uuidv4() + ".jpg";

      const type = await Type.create({ code, title, image: fileName });
      /// @ts-expect-error
      await type.addCategories([category]);

      file.mv(path.resolve(__dirname, "../..", "static", fileName));
      return res.json(type);
    } catch (e) {
      next(ApiError.badRequest(e?.message));
    }
  }

  async getByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { categoryId } = req.query;
      const typeCategories = await TypeCategory.findAll({
        where: { categoryId },
      });
      // @ts-expect-error
      const typeIds = typeCategories.map((tc) => tc.typeId);
      const types = await Type.findAndCountAll({ where: { id: typeIds } });
      return res.json(types);
    } catch (e) {
      next(ApiError.badRequest(e?.message));
    }
  }

  async getAll(_req: Request, res: Response) {
    const types = await Type.findAll();
    res.json(types);
  }

  async updateOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_addOne" });
  }

  async deleteOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_deleteOne" });
  }
}

export const typeController = new TypeController();

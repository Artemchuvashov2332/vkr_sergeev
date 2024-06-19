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

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const type = await Type.findByPk(id);
      const categoryTypes = await TypeCategory.findAll({
        where: { typeId: id },
      });

      // @ts-expect-error
      const categoryIds = categoryTypes.map((ct) => ct.categoryId);

      return res.json({ ...type.dataValues, categoryIds });
    } catch (e) {
      next(ApiError.badRequest(e.message));
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

  async getAll(req: Request, res: Response) {
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const offset = parseInt(req.query.offset as string, 10) || 0;
    const { count, rows } = await Type.findAndCountAll({
      limit,
      offset,
    });

    res.header(
      "Content-Range",
      `categories ${offset}-${offset + rows.length - 1}/${count}`
    );
    res.json({ count, rows });
  }

  async updateOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_addOne" });
  }

  async deleteOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_deleteOne" });
  }
}

export const typeController = new TypeController();

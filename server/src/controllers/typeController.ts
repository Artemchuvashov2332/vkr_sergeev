import { NextFunction, Request, Response } from "express";
import { TypeControllerCreateReq } from "./types/typeController.types";
import { ApiError } from "../error/ApiError";
import { Product, Type, TypeCategory } from "../models/models";
import { getSortedItem } from "../utils";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

class TypeController {
  async create(
    req: TypeControllerCreateReq,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { code, title } = req.body;

      const { image } = req.files;
      const file = Array.isArray(image) ? image[0] : image;
      const fileName = uuidv4() + ".jpg";

      const type = await Type.create({ code, title, image: fileName });

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

  async getForProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { productId } = req.query;

      const currentProduct = await Product.findByPk(Number(productId));

      const allTypes = await Type.findAndCountAll();
      const checkedTypes = await Type.findAll({
        // @ts-expect-error
        where: { id: currentProduct.typeId },
      });

      // @ts-expect-error
      const checkedTypesIds = checkedTypes.map(({ id }) => id);

      console.log(checkedTypes);

      const resultCategories = getSortedItem(allTypes.rows).map((type) => ({
        ...type.toJSON(),
        // @ts-expect-error
        checked: checkedTypesIds.includes(type.id),
      }));

      return res.json({
        rows: resultCategories,
        count: allTypes.count,
      });
    } catch (error) {}
  }

  async getAll(req: Request, res: Response) {
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const offset = parseInt(req.query.offset as string, 10) || 0;
    const [sortField, sortDirection] = JSON.parse(
      (req.query.sort || "[]") as string
    );

    const { count, rows } = await Type.findAndCountAll({
      limit,
      offset,
    });

    res.header(
      "Content-Range",
      `categories ${offset}-${offset + rows.length - 1}/${count}`
    );
    res.json({ count, rows: getSortedItem(rows, sortField, sortDirection) });
  }

  async updateOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { code, title } = req.body;
      const newImage = req.files?.image;
      const newFile = Array.isArray(newImage) ? newImage[0] : newImage;

      const type = await Type.findByPk(id);
      if (!type) return next(ApiError.badRequest("Type not found!"));

      //@ts-expect-error
      const oldImageName = type.image;
      const newFileName = newFile ? `${uuidv4()}.jpg` : oldImageName;

      const updatedType = await type.update({
        code,
        title,
        image: newFileName,
      });

      if (newFile && oldImageName) {
        const oldFilePath = path.resolve(
          __dirname,
          "../..",
          "static",
          oldImageName
        );
        fs.unlink(oldFilePath, (err) => {
          if (err) console.error("Error deleting old image file:", err);
        });
        newFile.mv(path.resolve(__dirname, "../..", "static", newFileName));
      }

      return res.json(updatedType);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateBindingCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { typeId, categories } = req.body;

      const type = await Type.findByPk(typeId);
      if (!type) {
        return next(ApiError.badRequest("Type not found"));
      }

      await TypeCategory.destroy({ where: { typeId } });

      for (const categoryId in categories) {
        if (categories[categoryId]) {
          await TypeCategory.create({ typeId, categoryId });
        }
      }

      res.status(200).json({ message: "Type categories updated successfully" });
    } catch (e) {
      next(ApiError.internal(e?.message));
    }
  }

  async deleteOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const type = await Type.findByPk(id);
      if (!type) {
        return next(ApiError.badRequest("Type not found"));
      }

      await TypeCategory.destroy({ where: { typeId: id } });
      await Type.destroy({ where: { id } });

      res.json({ message: "Type and related categories deleted successfully" });
    } catch (e) {
      next(ApiError.internal(e?.message));
    }
  }
}

export const typeController = new TypeController();

import { NextFunction, Request, Response } from "express";
import { CategoryControllerCreateReq } from "./types/categoryController.types";
import { ApiError } from "../error/ApiError";
import { Category, TypeCategory } from "../models/models";
import { getSortedItem } from "../utils";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
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
      const fileName = `${uuidv4()}.jpg`;

      const category = await Category.create({ code, title, image: fileName });
      file.mv(path.resolve(__dirname, "../..", "static", fileName));
      return res.json(category);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) return next(ApiError.badRequest("Category not found!"));

      return res.json(category);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string, 10) || 10;
      const offset = parseInt(req.query.offset as string, 10) || 0;
      const [sortField, sortDirection] = JSON.parse(
        (req.query.sort || "[]") as string
      );

      const { count, rows } = await Category.findAndCountAll({ limit, offset });

      res.header(
        "Content-Range",
        `categories ${offset}-${offset + rows.length - 1}/${count}`
      );
      return res.json({
        count,
        rows: getSortedItem(rows, sortField, sortDirection),
      });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getForType(req: Request, res: Response, next: NextFunction) {
    try {
      const { typeId } = req.query;

      const categoryTypes = await TypeCategory.findAll({
        where: { typeId },
      });

      // @ts-expect-error
      const checkedCategoryIds = categoryTypes.map((ct) => ct.categoryId);
      const allCategories = await Category.findAndCountAll();

      const resultCategories = getSortedItem(allCategories.rows).map(
        (category) => ({
          ...category.toJSON(),
          // @ts-expect-error
          checked: checkedCategoryIds.includes(category.id),
        })
      );

      return res.json({
        rows: resultCategories,
        count: allCategories.count,
      });
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }

  async updateOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { code, title } = req.body;
      const newImage = req.files?.image;
      const newFile = Array.isArray(newImage) ? newImage[0] : newImage;

      const category = await Category.findByPk(id);
      if (!category) return next(ApiError.badRequest("Category not found!"));

      //@ts-expect-error
      const oldImageName = category.image;
      const newFileName = newFile ? `${uuidv4()}.jpg` : oldImageName;

      const updatedCategory = await category.update({
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

      return res.json(updatedCategory);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async deleteOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);

      if (!category) return next(ApiError.badRequest("Category not found!"));

      await category.destroy();
      return res.json({ message: "Category deleted successfully" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

export const categoryController = new CategoryController();

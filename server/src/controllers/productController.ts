import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError";
import { Product, ProductInfo } from "../models/models";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { Op } from "sequelize";
import fs from "fs";
import {
  ProductControllerCreateReq,
  ProductControllerGetAllReq,
  ProductControllerGetOneReq,
} from "./types/productController.types";
import { parseData } from "../utils";

class ProductController {
  async create(
    req: ProductControllerCreateReq,
    res: Response,
    next: NextFunction
  ) {
    try {
      const parsedBody = parseData(req.body);
      const {
        amount,
        name,
        price,
        rating,
        typeId,
        description,
        summary,
        characteristics,
      } = parsedBody;
      const { image } = req.files;

      const file = Array.isArray(image) ? image[0] : image;
      const fileName = uuidv4() + ".jpg";

      const product = await Product.create({
        amount,
        name,
        price,
        rating: rating || 0,
        image: fileName,
        typeId,
        summaryDescription: summary || "",
        description,
      });

      file.mv(path.resolve(__dirname, "../..", "static", fileName));

      await Promise.all(
        characteristics.map(async ({ title, description }) => {
          await ProductInfo.create({
            title,
            description,
            // @ts-expect-error
            productId: product.id,
          });
        })
      );

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e?.message));
    }
  }

  async getOne(
    req: ProductControllerGetOneReq,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id, {
        include: [{ model: ProductInfo, as: "characteristics" }],
      });
      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e?.message));
    }
  }

  async getAll(
    req: ProductControllerGetAllReq,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { categoryId, typeId, limit = 9, page = 1, search } = req.query;
      const offset = (page - 1) * limit;

      const whereConditions: Record<string, unknown> = {};

      if (search) {
        whereConditions.name = {
          [Op.iLike]: `%${search}%`,
        };
      } else {
        Object.entries({ categoryId, typeId }).forEach(([key, value]) => {
          if (!value) return;
          whereConditions[key] = value;
        });
      }

      const dbSearchParams = {
        limit,
        offset,
        where: whereConditions,
      };

      const { rows, count } = await Product.findAndCountAll(dbSearchParams);

      res.header(
        "Content-Range",
        `categories ${offset}-${offset + rows.length - 1}/${count}`
      );
      return res.json({ rows, count });
    } catch (error) {
      return next(ApiError.internal("Internal server error!"));
    }
  }

  async updateOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const parsedBody = parseData(req.body);
      const {
        amount,
        name,
        price,
        rating,
        typeId,
        description,
        summary,
        characteristics,
      } = parsedBody;

      const newImage = req.files?.image;
      const newFile = Array.isArray(newImage) ? newImage[0] : newImage;

      const product = await Product.findByPk(id);
      if (!product) {
        return next(ApiError.badRequest("Product not found"));
      }

      // @ts-expect-error
      const oldImageName = product.image;
      const newFileName = newFile ? `${uuidv4()}.jpg` : oldImageName;

      const updatedProduct = await product.update({
        amount,
        name,
        price,
        rating: rating || 0,
        image: newFileName,
        typeId,
        summaryDescription: summary || "",
        description,
      });

      await ProductInfo.destroy({ where: { productId: id } });

      await Promise.all(
        characteristics.map(async ({ title, description }) => {
          await ProductInfo.create({
            title,
            description,
            // @ts-expect-error
            productId: product.id,
          });
        })
      );

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

      return res.json(updatedProduct);
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }

  async updateBindingType(req: Request, res: Response, next: NextFunction) {
    try {
      const { productId, type } = req.body;

      const product = await Product.findByPk(productId);
      if (!product) {
        return next(ApiError.badRequest("Product not found"));
      }

      await product.update({
        typeId: type,
      });

      res.status(200).json({ message: "Type categories updated successfully" });
    } catch (e) {
      next(ApiError.internal(e?.message));
    }
  }

  async deleteOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);

      if (!product) return next(ApiError.badRequest("Product not found!"));

      await product.destroy();
      return res.json({ message: "Product deleted successfully" });
    } catch (e) {
      next(ApiError.internal(e.message));
    }
  }
}

export const productController = new ProductController();

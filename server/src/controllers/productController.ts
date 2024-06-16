import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError";
import { Product, ProductInfo } from "../models/models";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { Op } from "sequelize";
import {
  ProductControllerCreateReq,
  ProductControllerGetAllReq,
  ProductControllerGetOneReq,
} from "./types/productController.types";

class ProductController {
  async create(
    req: ProductControllerCreateReq,
    res: Response,
    next: NextFunction
  ) {
    try {
      const {
        amount,
        name,
        price,
        rating,
        categoryId,
        typeId,
        description,
        summary,
        characteristics: characteristicsInJson,
      } = req.body;
      const { image } = req.files;
      const characteristics = JSON.parse(characteristicsInJson);

      const file = Array.isArray(image) ? image[0] : image;
      const fileName = uuidv4() + ".jpg";

      const product = await Product.create({
        amount,
        name,
        price,
        rating: rating || 0,
        image: fileName,
        categoryId,
        typeId,
        summaryDescription: summary || "",
        description,
      });

      file.mv(path.resolve(__dirname, "../..", "static", fileName));

      if (characteristicsInJson) {
        characteristics.forEach(({ title, description }) => {
          ProductInfo.create({
            title,
            description,
            // @ts-expect-error
            productId: product.id,
          });
        });
      }
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

  async getAll(req: ProductControllerGetAllReq, res: Response) {
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

    try {
      const products = await Product.findAndCountAll(dbSearchParams);
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateOne(req: Request, res: Response) {}

  async deleteOne(req: Request, res: Response) {
    res.json({ message: "hui_pizda_deleteOne" });
  }
}

export const productController = new ProductController();

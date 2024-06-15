import { NextFunction, Request, Response } from "express";
import { ApiError } from "../error/ApiError";
import { Product, ProductInfo } from "../models/models";
import { v4 as uuidv4 } from "uuid";
import path from "path";

class ProductController {
    async create(
        req: Request<
            {},
            {},
            {
                name: string;
                price: string;
                categoryId: number;
                typeId: number;
                rating?: string;
                info: string;
            }
        >,
        res: Response,
        next: NextFunction
    ) {
        try {
            const {
                name,
                price,
                rating,
                categoryId,
                typeId,
                info: infoInJson,
            } = req.body;
            const { image } = req.files;
            const info = JSON.parse(infoInJson);

            const file = Array.isArray(image) ? image[0] : image;
            const fileName = uuidv4() + ".jpg";

            const product = await Product.create({
                name,
                price,
                rating: rating || 0,
                image: fileName,
                categoryId,
                typeId,
            });

            file.mv(path.resolve(__dirname, "../..", "static", fileName));

            if (infoInJson) {
                console.log(info, typeof info)
                info.forEach(({ title, description }) => {
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
        req: Request<{ id: number }>,
        res: Response,
        next: NextFunction
    ) {
        try {
            const { id } = req.params;
            console.log(id, '<----------------');

            const product = await Product.findByPk(id, {
                include: [{ model: ProductInfo, as: "info" }],
            });
            return res.json(product);
        } catch (e) {
            next(ApiError.badRequest(e?.message));
        }
    }

    async getAll(
        req: Request<
            {},
            {},
            {
                categotyId?: number;
                typeId?: number;
                limit?: number;
                page?: number;
            }
        >,
        res: Response
    ) {
        const { categotyId, typeId, limit = 9, page = 1 } = req.body;
        const offset = (page - 1) * limit;

        const dbSearchParams: {
            limit: number;
            offset: number;
            where?: Record<string, unknown>;
        } = { limit, offset };

        if (categotyId && !typeId) {
            dbSearchParams.where = { categotyId };
        } else if (!categotyId && typeId) {
            dbSearchParams.where = { typeId };
        } else if (categotyId & typeId) {
            dbSearchParams.where = { categotyId, typeId };
        }

        const products = await Product.findAndCountAll(dbSearchParams);
        return res.json(products);
    }

    async updateOne(req: Request, res: Response) {
        res.json({ message: "hui_pizda_addOne" });
    }

    async deleteOne(req: Request, res: Response) {
        res.json({ message: "hui_pizda_deleteOne" });
    }
}

export const productController = new ProductController();

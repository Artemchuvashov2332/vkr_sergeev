import { Request, Response } from "express";

class ProductController {
    async create(req: Request, res: Response) {
        res.json({ message: 'hui_pizda_create' })
    }

    async getOne(req: Request, res: Response) {
        res.json({ message: 'hui_pizda_create' })
    }

    async getAll(req: Request, res: Response) {
        res.json({ message: 'hui_pizda_getAll' })
    }

    async updateOne(req: Request, res: Response) {
        res.json({ message: 'hui_pizda_addOne' })

    }

    async deleteOne(req: Request, res: Response) {
        res.json({ message: 'hui_pizda_deleteOne' })

    }
}

export const productController = new ProductController();
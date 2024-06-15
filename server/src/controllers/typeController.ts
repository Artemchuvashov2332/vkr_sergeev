import { Request, Response, RequestHandler } from "express";

class TypeController {

    async create(req: Request, res: Response) {
        res.json({ message: 'hui_pizda_create' })
    }

    async getByCategory(req: Request, res: Response) {
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

export const typeController = new TypeController();
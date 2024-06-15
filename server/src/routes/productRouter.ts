import express from 'express';
import { productController } from '../controllers/productController';
const router = express.Router();

router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.post('/', productController.create);
router.put('/', productController.updateOne);
router.delete('/', productController.deleteOne);

export { router as productRouter }

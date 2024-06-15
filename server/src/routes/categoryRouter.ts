import express from 'express';
import { categoryController } from '../controllers/categoryController'
const router = express.Router();

router.get('/all', categoryController.getAll);
router.post('/new', categoryController.create);
router.put('/', categoryController.updateOne);
router.delete('/', categoryController.deleteOne);

export { router as categoryRouter }
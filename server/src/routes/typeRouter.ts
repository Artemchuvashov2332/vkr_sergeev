import express from 'express';
import { typeController } from '../controllers/typeController';
const router = express.Router();

router.get('/all', typeController.getAll);
router.get('/:category', typeController.getByCategory);
router.post('/new', typeController.create);
router.put('/', typeController.updateOne);
router.delete('/', typeController.deleteOne)

export { router as typeRouter }

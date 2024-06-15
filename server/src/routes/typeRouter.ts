import express from 'express';
import { typeController } from '../controllers/typeController';
const router = express.Router();

router.get('/all', typeController.getAll);
router.post('/', typeController.create);
router.put('/', typeController.updateOne);
router.delete('/', typeController.deleteOne)

export { router as typeRouter }

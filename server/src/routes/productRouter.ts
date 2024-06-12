import express from 'express';
const router = express.Router();

router.post('/');
router.get('/');
router.get('/:id');

export { router as productRouter }

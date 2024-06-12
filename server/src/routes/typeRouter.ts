import express from 'express';
const router = express.Router();

router.post('/');
router.get('/', (reg, res) => {
    res.json({ message: "ALL Hui" })
});

export { router as typeRouter }

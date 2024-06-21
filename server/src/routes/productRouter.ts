import express from "express";
import { productController } from "../controllers/productController";
const router = express.Router();

router.get("/:id", productController.getOne);
router.get("/", productController.getAll);

router.post("/", productController.create);

router.put("/:id/updateType", productController.updateBindingType);
router.put("/:id", productController.updateOne);

router.delete("/:id", productController.deleteOne);

export { router as productRouter };

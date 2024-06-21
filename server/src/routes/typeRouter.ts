import express from "express";
import { typeController } from "../controllers/typeController";
const router = express.Router();

router.get("/forProducts", typeController.getForProduct);
router.get("/one", typeController.getByCategory);
router.get("/:id", typeController.getOne);
router.get("/", typeController.getAll);

router.post("/", typeController.create);

router.put("/:id/updateCategories", typeController.updateBindingCategory);
router.put("/:id", typeController.updateOne);

router.delete("/:id", typeController.deleteOne);

export { router as typeRouter };

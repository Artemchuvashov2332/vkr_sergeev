import express from "express";
import { categoryController } from "../controllers/categoryController";
const router = express.Router();

router.get("/forTypes", categoryController.getForType);
router.get("/:id", categoryController.getOne);
router.get("/", categoryController.getAll);

router.post("/", categoryController.create);

router.put("/:id", categoryController.updateOne);

router.delete("/:id", categoryController.deleteOne);

export { router as categoryRouter };

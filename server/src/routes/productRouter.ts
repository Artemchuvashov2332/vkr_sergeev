import express from "express";
import { productController } from "../controllers/productController";
import { checkForAdminRoleMiddleware } from "../middlewares/checkRoleMiddleware";
const router = express.Router();

router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.post("/new", checkForAdminRoleMiddleware, productController.create);
router.put("/", checkForAdminRoleMiddleware, productController.updateOne);
router.delete("/", checkForAdminRoleMiddleware, productController.deleteOne);

export { router as productRouter };

import express from "express";
import { typeController } from "../controllers/typeController";
import { checkForAdminRoleMiddleware } from "../middlewares/checkRoleMiddleware";
const router = express.Router();

router.get("/", typeController.getAll);
router.get("/one", typeController.getByCategory);
router.post("/new", checkForAdminRoleMiddleware, typeController.create);
router.put("/", checkForAdminRoleMiddleware, typeController.updateOne);
router.delete("/", checkForAdminRoleMiddleware, typeController.deleteOne);

export { router as typeRouter };

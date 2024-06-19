import express from "express";
import { categoryController } from "../controllers/categoryController";
import { checkForAdminRoleMiddleware } from "../middlewares/checkRoleMiddleware";
const router = express.Router();

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);
// router.post("/", checkForAdminRoleMiddleware, categoryController.create);
router.post("/", categoryController.create);
// router.put("/", checkForAdminRoleMiddleware, categoryController.updateOne);
router.put("/:id", categoryController.updateOne);
// router.delete(
//   "/:id",
//   checkForAdminRoleMiddleware,
//   categoryController.deleteOne
// );
router.delete(
  "/:id",
  //   checkForAdminRoleMiddleware,
  categoryController.deleteOne
);

export { router as categoryRouter };

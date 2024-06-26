import express from "express";
import { userController } from "../controllers/userController";
import { authHandlingMiddleware } from "../middlewares/authMiddleware";
const router = express.Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authHandlingMiddleware, userController.check);

export { router as userRouter };

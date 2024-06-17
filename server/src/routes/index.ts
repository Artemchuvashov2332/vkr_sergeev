import express from "express";
import { typeRouter } from "./typeRouter";
import { productRouter } from "./productRouter";
import { categoryRouter } from "./categoryRouter";
import { userRouter } from "./userRouter";
const router = express.Router();

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/product", productRouter);
router.use("/category", categoryRouter);

export { router };

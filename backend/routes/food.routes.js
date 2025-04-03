import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addFood } from "../controllers/food.controller.js";

const router = Router();

router.route("/add").post(verifyJWT, addFood);

export default router;
import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addFood, getUserFoods } from "../controllers/food.controller.js";

const router = Router();

// Route to add a food donation
router.route("/add").post(verifyJWT, addFood);

// Route to get all foods by the logged-in user
router.route("/my-foods").get(verifyJWT, getUserFoods);

export default router;
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Food } from "../models/food.model.js";

// Add Food donation!!
const addFood = asyncHandler(async (req, res) => {
    const { title, description, pickupTime, quantity, location } = req.body;

    if (!title || !description || !pickupTime || !quantity || !location) {
        throw new ApiError(400, "All fields are required");
    }

    const newFood = await Food.create({
        title,
        description,
        pickupTime, 
        quantity,
        location,
        user: req.user._id
    });

    return res.status(201).json(new ApiResponse(201, newFood, "Food added successfully"));
});

// Get all foods added by the logged-in user
const getUserFoods = asyncHandler(async (req, res) => {
    const foods = await Food.find({ user: req.user._id }).sort({ createdAt: -1 });

    return res
        .status(200)
        .json(new ApiResponse(200, foods, "Foods for user fetched successfully"));
});

export { addFood, getUserFoods };

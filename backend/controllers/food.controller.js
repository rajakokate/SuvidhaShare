import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Food } from "../models/food.model.js";

// Add Food donation!!
const addFood = asyncHandler(async (req, res) => {
    const { title, description, expiryTime, quantity, address } = req.body;

    if (!title || !description || !expiryTime || !quantity || !address) {
        throw new ApiError(400, "All fields are required");
    }

    const newFood = await Food.create({
        title,
        description,
        expiryTime,
        quantity,
        address,
        user: req.user._id
    });

    return res.status(201).json(new ApiResponse(201, newFood, "Food added successfully"));
});

export { addFood };

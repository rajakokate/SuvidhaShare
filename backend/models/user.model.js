import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            maxlength: 50,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            maxlength: 50,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: [true, "Name is required"],
            maxlength: 50,
            trim: true,
            index: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: 8,
        },
        refreshToken: {
            type: String,
        },
        role: {
            type: String,
            enum: ["volunteer", "individual", "organisation", "admin"],
            default: "individual"
        },
        avatar: {
            data: Buffer,
            contentType: String,
            default: null
        }
    },
    { timestamps: true }
);

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = async function() {
    return await jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = async function() {
    return await jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);
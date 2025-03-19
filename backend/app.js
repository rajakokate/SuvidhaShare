import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({extended: true, limit: "16kb" }));
app.use(express.static("./public"));
app.use(cookieParser());

// routes import
// import dashboardRouter from "./routes/dashboard.routes.js"
import userRouter from "./routes/user.routes.js"

// routes handling
// app.use("/api/v1/dashboard", dashboardRouter)
app.use("/api/v1/user", userRouter)

export { app };
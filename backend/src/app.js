import express from "express";
import cors from "cors";
import adminRouter from "./routes/adminRoutes.js";
import authRoute from "./routes/authRoute.js";
import path from "path";

const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(cors());

// calling app admin's route
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/auth", authRoute);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

export default app;

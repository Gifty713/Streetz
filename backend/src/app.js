import express from "express";
import cors from "cors";
import adminRouter from "./routes/adminRoutes.js";
import path from "path";

const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(cors());

// calling app admin's route
app.use("/api/v1/admin", adminRouter);

// example route: http://localhost:4000/api/v1/admin/addproduct

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

export default app;
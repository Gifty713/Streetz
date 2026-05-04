import express from "express";
import cors from "cors";
import adminRouter from "./routes/adminRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

// calling app admin's route
app.use("/api/v1/admin", adminRouter);

// example route: http://localhost:4000/api/v1/admin/addproduct

export default app;
import { Router } from "express";
import upload from "../middleware/multerUpload.js";
import { addProduct } from "../controllers/productController.js";

const adminRouter = Router();
adminRouter.route("/addproduct").post(upload.single("image"), addProduct);

export default adminRouter; 
import { Router } from "express";
import upload from "../middleware/multerUpload.js";
import { addProduct, getProduct } from "../controllers/productController.js";

const adminRouter = Router();
adminRouter.route("/addproduct").post(upload.single("image"), addProduct);
adminRouter.route("/getproducts").get(getProduct);
export default adminRouter; 
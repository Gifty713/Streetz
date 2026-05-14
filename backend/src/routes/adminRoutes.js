import { Router } from "express";
import upload from "../middleware/multerUpload.js";
import { addProduct, getProduct, deleteProducts, particularProduct } from "../controllers/productController.js";

const adminRouter = Router();
adminRouter.route("/addproduct").post(upload.single("image"), addProduct);
adminRouter.route("/getproducts").get(getProduct);
adminRouter.route("/getoneproduct/:id").get(particularProduct);
adminRouter.route("/deleteproduct/:id").delete(deleteProducts);
export default adminRouter; 
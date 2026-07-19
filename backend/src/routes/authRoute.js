import { Router } from "express";
import { loginAdmin, logoutAdmin, getAdminSession } from "../controllers/authController.js";
import authenticateToken from "../middleware/jsonAuth.js";
const authRoute = Router();

authRoute.route("/login").post(loginAdmin);
authRoute.route("/logout").post(logoutAdmin);
authRoute.route("/session").get(authenticateToken, getAdminSession);

export default authRoute;

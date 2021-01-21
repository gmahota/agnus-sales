import { Router } from "express";
import AuthController from "../controllers/admin/authController"
import authMiddleware from "../middlewares/auth";
import { checkJwt } from "../middlewares/checkJwt";

const authRouter = Router();
//Login route
authRouter.post("/login", AuthController.login);
authRouter.post("/api/auth/login", AuthController.login)
authRouter.get("/api/auth/guest", AuthController.guest)
authRouter.get("/api/auth/auth", authMiddleware, AuthController.auth)

//Change my password
//router.post("/change-password", [checkJwt], AuthController.changePassword);

export default authRouter;
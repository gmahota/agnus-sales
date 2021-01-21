import { Router } from "express";
import AuthController from "../controllers/admin/authController"
import authMiddleware from "../middlewares/auth";
import { checkJwt } from "../middlewares/checkJwt";

const authRouter = Router();
//Login route
authRouter.post("/login", AuthController.login);
authRouter.get("/guest", AuthController.guest)
authRouter.get("/auth", authMiddleware, AuthController.auth)

//Change my password
//router.post("/change-password", [checkJwt], AuthController.changePassword);

export default authRouter;
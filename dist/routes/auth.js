"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/admin/authController"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const authRouter = (0, express_1.Router)();
//Login route
authRouter.post("/login", authController_1.default.login);
authRouter.get("/guest", authController_1.default.guest);
authRouter.get("/auth", auth_1.default, authController_1.default.auth);
//Change my password
//router.post("/change-password", [checkJwt], AuthController.changePassword);
exports.default = authRouter;

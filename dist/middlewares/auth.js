"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __importDefault(require("../services/auth/token"));
const extractToken = async (request) => {
    const authorization = request.headers.authorization || "";
    return authorization.replace("Bearer ", "");
};
const handleError = async (error) => {
    console.error("Failed to verify token", error);
    // illustration purposes only
    // for production-ready code, use error codes/types and a catalog (maps codes -> responses)
    /* eslint-disable prefer-promise-reject-errors */
    return Promise.reject({
        status: 401,
        message: "Invalid authentication token",
        code: "UNAUTHENTICATED",
    });
};
const authMiddleware = async (request, response, next) => {
    const token = await extractToken(request);
    const tokenValid = await token_1.default.verify(token);
    try {
        if (tokenValid) {
            next();
        }
        else {
            handleError;
        }
    }
    catch (e) {
        handleError;
    }
};
exports.default = authMiddleware;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = verifyToken;
exports.createToken = createToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Secret key used for signing and verifying tokens
const secretKey = process.env.JWT_SECRET || "Hello Word";
// Function to verify a token
function verifyToken(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        return decoded;
    }
    catch (error) {
        // Token verification failed
        return null;
    }
}
// Function to create a token
function createToken(payload) {
    const token = jsonwebtoken_1.default.sign(payload, secretKey, {
        expiresIn: process.env.JWT_DURATION || "24h",
    });
    return token;
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    hashSaltRounds: 10,
    jwt: {
        secret: process.env.JWT_SECRET || "Ola Mundo",
        duration: process.env.JWT_DURATION || "1h",
        privateKey: process.env.JWT_PRIVATE_KEY || "",
        publicKey: process.env.JWT_PUBLIC_KEY || "",
    },
};

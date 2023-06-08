"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("../../config/crypto"));
const signOptions = {
    algorithm: "RS256",
    expiresIn: crypto_1.default.jwt.duration,
};
const sign = (payload) => jsonwebtoken_1.default.sign(payload, crypto_1.default.jwt.secret);
const verify = async (token) => jsonwebtoken_1.default.verify(token, crypto_1.default.jwt.secret);
exports.default = {
    sign,
    verify,
};

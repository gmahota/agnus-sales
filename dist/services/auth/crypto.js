"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("../../config/crypto"));
const hash = (value) => bcrypt_1.default
    .hash(value, crypto_1.default.hashSaltRounds);
const compare = async (value, hash) => {
    try {
        const result = await bcrypt_1.default.compare(value, hash);
        return result;
    }
    catch (e) {
        throw e;
    }
};
exports.default = {
    hash,
    compare,
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const crypto_1 = __importDefault(require("./crypto"));
const token_1 = __importDefault(require("./token"));
/* eslint-disable prefer-promise-reject-errors */
const authFailed = (email) => Promise.reject({
    status: 401,
    code: 'UNAUTHENTICATED',
    message: `Failed to authenticate user ${email}`,
});
const authenticate = async (params) => {
    const { email, password } = params;
    const user = await user_1.default.findByEmail(email);
    if (!user) {
        return authFailed(email);
    }
    const isMatch = await crypto_1.default.compare(password, user.password);
    if (!isMatch) {
        return authFailed(email);
    }
    return token_1.default.sign({ id: user.id });
};
exports.default = {
    authenticate,
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../services/auth/user"));
const token_1 = __importDefault(require("../../services/auth/token"));
const crypto_1 = __importDefault(require("../../services/auth/crypto"));
const login = async (request, response) => {
    try {
        const { username, password, } = request.body;
        const result = await user_1.default.findByName(username);
        if (result) {
            if (username.toLowerCase() === result.username.toLowerCase() &&
                await crypto_1.default.compare(password, result.password)) {
                const user = {
                    username: result.username,
                    //password: result.password,
                };
                // Create JWT and send it to user
                const jwt = token_1.default.sign(user);
                if (jwt) {
                    return response.status(200).json({
                        userName: user.username,
                        token: jwt,
                    });
                }
                else {
                    return response.status(500).json({ msg: "Internal server error" });
                }
            }
        }
        return response.status(422).json({ msg: "Invalid username or password" });
    }
    catch (e) {
        return response.status(500).json({ msg: "Internal server error", error: e });
    }
};
const guest = (request, response) => {
    return response.status(200).json({ msg: "Guest success" });
};
const auth = (request, response) => {
    return response.status(200).json({ msg: "Auth success" });
};
exports.default = {
    login,
    guest,
    auth
};

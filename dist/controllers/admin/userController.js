"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_user = exports.create_user = exports.get_user = exports.get_all_users = void 0;
const uuid_1 = require("uuid");
const user_1 = __importDefault(require("../../services/auth/user"));
const get_all_users = async (request, response) => {
    const users = await user_1.default.getUsers();
    return response.status(200).json(users);
};
exports.get_all_users = get_all_users;
const get_user = async (request, response) => {
    const { id } = request.body;
    const user = await user_1.default.findByName(id);
    if (user) {
        return response.status(200).json(user);
    }
    return response.status(404).json({ msg: "no user with that id" });
};
exports.get_user = get_user;
const create_user = async (request, response) => {
    const { username, name, firstName, lastName, email, phoneNumber, password, confirmPassword, inactive, country, } = await request.body;
    // validate data & types of data
    const id = (0, uuid_1.v4)();
    const user = {
        id,
        username,
        name,
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        confirmPassword,
        inactive,
        country,
    };
    try {
        await user_1.default.createUser(user);
        return response.status(200).json({ id: id });
    }
    catch (e) {
        return response.status(404).json({ msg: "error to create a user with that i" });
    }
};
exports.create_user = create_user;
const delete_user = async (request, response) => {
    return response.status(500).json({ msg: "not Implemented" });
    const { id } = request.body;
    try {
        //await userService.remove(id);
        return response.send(200).json({ id: id });
    }
    catch (e) {
        return response.send(404).json({ msg: "error to create a user with that i" });
    }
};
exports.delete_user = delete_user;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = __importDefault(require("ramda"));
const crypto_1 = __importDefault(require("./crypto"));
const userRepository_1 = __importDefault(require("../../repository/admin/userRepository"));
const serializeUsers = (users) => users
    .map((user) => user)
    .map(ramda_1.default.omit(["password"]));
const getUsers = () => userRepository_1.default.findAll()
    .then(serializeUsers);
const createUser = (user) => crypto_1.default
    .hash(user.password)
    .then((hash) => userRepository_1.default.create(Object.assign(Object.assign({}, user), { password: hash })));
const findByEmail = (email) => userRepository_1.default.findByEmail(email);
const findByName = (name) => userRepository_1.default.findByName(name);
exports.default = {
    getUsers,
    createUser,
    findByEmail,
    findByName,
};

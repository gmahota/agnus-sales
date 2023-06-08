"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/admin/user");
const typeorm_1 = require("typeorm");
const search = async function search(id) {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    const user = await userRepository.findOneOrFail({ username: id });
    return user;
};
const findAll = async function findAll() {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    const users = await userRepository.find({
        order: {
            name: "ASC",
            id: "DESC",
        },
    });
    return users;
};
const findByEmail = async function findByEmail(email) {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    const user = await userRepository.findOneOrFail({ email: email });
    return user;
};
const findByName = async function findByName(name) {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    const user = await userRepository.findOneOrFail({ username: name });
    return user;
};
const create = async function create(user) {
    const userRepository = (0, typeorm_1.getRepository)(user_1.User);
    await userRepository.save(user);
    return user;
};
exports.default = {
    create,
    search,
    findAll,
    findByEmail,
    findByName,
};

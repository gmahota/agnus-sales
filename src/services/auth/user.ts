import R from "ramda";
import crypto from "./crypto";
import { User } from "../../models/admin/user";
import UserRepository from "../../repository/admin/userRepository";

const serializeUsers = (users: User[]) =>
  users
    .map((user) => user)
    .map(R.omit(["password"]));

const getUsers = () =>
  UserRepository.findAll()
    .then(serializeUsers);

const createUser = (user: User) =>
  crypto
    .hash(user.password)
    .then((hash) =>
      UserRepository.create({
        ...user,
        password: hash,
      })
    );

const findByEmail = (email: string) => UserRepository.findByEmail(email);

const findByName = (name: string) => UserRepository.findByName(name);

export default {
  getUsers,
  createUser,
  findByEmail,
  findByName,
};

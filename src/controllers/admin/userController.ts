import { Request, Response } from "express";
import { v4 } from "uuid";
import userService from "../../services/auth/user";

export const get_all_users = async (request: Request, response: Response) => {
  const users = await userService.getUsers();
  return response.status(200).json(users);
};

export const get_user = async (request: Request, response: Response) => {
  const { id } = request.body;

  const user = await userService.findByName(id);

  if (user) {
    return response.status(200).json(user);
  }
  return response.status(404).json({ msg: "no user with that id" });
};

export const create_user = async (request: Request, response: Response) => {
  const {
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
  } = await request.body;

  // validate data & types of data
  const id = v4();

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
    await userService.createUser(user);
    return response.status(200).json({ id: id });
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a user with that i" },
    );
  }
};

export const delete_user = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await userService.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
        { msg: "error to create a user with that i" },
      );
  }
};

import { User } from "../../models/admin/user";
import { getRepository } from "typeorm";

interface Key {
  id?: any;
}

interface Key {
  id?: any;
}

const search = async function search(id: string): Promise<User> {
  const userRepository = getRepository(User);

  const user: User = await userRepository.findOneOrFail({ username: id });

  return user;
};

const findAll = async function findAll(): Promise<User[]> {
  const userRepository = getRepository(User);

  const users: User[] = await userRepository.find({
    order: {
      name: "ASC",
      id: "DESC",
    },
  });

  return users;
};

const findByEmail = async function findByEmail(email: string): Promise<User> {
  const userRepository = getRepository(User);

  const user: User = await userRepository.findOneOrFail({ email: email });

  return user;
};

const findByName = async function findByName(name: string): Promise<User> {
  const userRepository = getRepository(User);

  const user: User = await userRepository.findOneOrFail({ username: name });

  return user;
};

const create = async function create(
  user: User,
): Promise<User> {
  const userRepository = getRepository(User);

  await userRepository.save(user);

  return user;
};

export default {
  create,
  search,
  findAll,
  findByEmail,
  findByName,
};

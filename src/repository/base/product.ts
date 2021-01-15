import Product from "../../models/base/product";
import { getRepository,getConnection } from "typeorm";

interface Key {
  id?: any;
}

const findById = async function findById(id: string): Promise<Product> {
  const ProductRepository = getRepository(Product);

  const data: Product = await ProductRepository.findOneOrFail({
      where: {id: id }
    });

  return data;
};

const findAll = async function findAll(): Promise<Product[]> {
  const ProductRepository = getRepository(Product);

  const data: Product[] = await ProductRepository.find({
    order: {
      description: "ASC",
      id: "DESC",
    },
  });

  return data;
}

const create = async function create(
  data: Product
): Promise<Product> {
  const ProductRepository = getRepository(Product);

  await ProductRepository.save(data);

  return data;
};

export default {
  create,
  findAll,
  findById
};

import Order from "../../models/sales/order";
import { getRepository } from "typeorm";

import { v4 as uuidv4 } from "uuid";

interface Key {
  id?: any;
}

interface Key {
  id?: any;
}

const findById = async function findById(id: number): Promise<Order> {
  const OrderRepository = getRepository(Order);

  const order: Order = await OrderRepository.findOneOrFail(
    { 
      relations:['items'],
      where: { id: id }
    }    
  );

  return order;
};

const findAll = async function findAll(): Promise<Order[]> {
  const OrderRepository = getRepository(Order);

  const Orders: Order[] = await OrderRepository.find({
    order: {
      name: "ASC",
      id: "DESC",
    }
  })

  return Orders;
};

const findByPhoneNumber = async function findByPhoneNumber(
  phoneNumber: string,
): Promise<Order[]> {
  const OrderRepository = getRepository(Order);

  const Orders: Order[] = await OrderRepository.find(
    {
      where: { phoneNumber: phoneNumber },
      order: {
        name: "ASC",
        id: "DESC",
      },
    },
  );

  return Orders;
};

const create = async function create(
  order: Order,
): Promise<Order> {
  const OrderRepository = getRepository(Order);

  const data  = OrderRepository.create(order);

  await OrderRepository.save(data);

  return data;
};

export default {
  create,
  findById,
  findAll,
  findByPhoneNumber,
};

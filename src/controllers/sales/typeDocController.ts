import { Request, Response } from "express";
import TypeDocService from "../../services/sales/typeDoc";
import TypeDoc from "../../models/sales/typeDoc";

export const get_all_typeDocs = async (request: Request, response: Response) => {

  let type = request.query.type as string;

  const orders = await TypeDocService.getAll({ type });

  return response.status(200).json(orders);
};

export const get_typeDoc = async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await TypeDocService.getByCode(id);

  if (item) {
    return response.status(200).json(item);
  }
  return response.status(404).json({ msg: "no order with that id" });
};

export const create_typeDoc = async (request: Request, response: Response) => {
  const {
    code,
    description,
    type
  } = await request.body;

  try {
    let item: TypeDoc = {
      code,
      description,
      type
    };

    item = await TypeDocService.create(item);

    return response.status(200).json(item);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a order with that i", error: e },
    );
  }
};

export const delete_typeDoc = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await orderService.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};

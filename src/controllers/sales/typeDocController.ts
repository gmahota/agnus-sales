import { Request, Response } from "express";
import TypeDocService from "../../services/sales/typeDocument";
import TypeDoc from "../../models/sales/typeDocument";

export const get_all_TypeDocs = async (request: Request, response: Response) => {
  const orders = await TypeDocService.getAll();
  return response.status(200).json(orders);
};

export const get_TypeDoc = async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await TypeDocService.getByCode(id);

  if (item) {
    return response.status(200).json(item);
  }
  return response.status(404).json({ msg: "no order with that id" });
};

export const create_TypeDoc = async (request: Request, response: Response) => {
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

export const delete_order = async (request: Request, response: Response) => {
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

import { Request, Response } from "express";
import productService from "../../services/base/product";
import product from "../../models/base/product";

export const get_all_products = async (
  request: Request,
  response: Response,
) => {
  const product = await productService.getAll();
  return response.status(200).json(product);
};

export const get_product = async (request: Request, response: Response) => {
  const { id } = request.params;

  const product = await productService.getById(id);

  if (product) {
    return response.status(200).json(product);
  }
  return response.status(404).json(
    { msg: "no product with that phoneNumber" },
  );
};

export const create_product = async (request: Request, response: Response) => {
  const {
    code,
    description,
    price,
  } = await request.body;

  try {
    let product: product = {
      id: 0,
      code,
      description,
      price,
    };

    product = await productService.create(product);

    return response.status(200).json(product);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a product with that i", error: e },
    );
  }
};

export const delete_product = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await productervice.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};

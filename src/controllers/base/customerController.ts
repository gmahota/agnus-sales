import { Request, Response } from "express";
import CustomerService from "../../services/base/customer";
import Customer from "../../models/base/customer";

export const get_all_customers = async (
  request: Request,
  response: Response,
) => {
  const Customer = await CustomerService.getAll();
  return response.status(200).json(Customer);
};

export const get_customer = async (request: Request, response: Response) => {
  const { id } = request.params;

  const Customer = await CustomerService.getById(id);

  if (Customer) {
    return response.status(200).json(Customer);
  }
  return response.status(404).json(
    { msg: "no Customer with that phoneNumber" },
  );
};

export const create_customer = async (request: Request, response: Response) => {
  const {
    code,
    name,
    address,
    vat,
    province,
    phoneNumber,
    cellphone,
    email
  } = await request.body;

  try {

    let Customer: Customer = {
      id: 0,
      code,
      name,
      address,
      vat,
      province,
      phoneNumber,
      cellphone,
      email
    };

    Customer = await CustomerService.create(Customer);

    return response.status(200).json(Customer);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a Customer with that i", error: e },
    );
  }
};

export const delete_customer = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await Customerervice.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};

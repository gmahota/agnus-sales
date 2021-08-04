import { Request, Response } from "express";
import CompanyService from "../../services/base/company";
import Company from "../../models/base/company";

export const get_all_companies = async (
  request: Request,
  response: Response,
) => {
  const Customer = await CompanyService.getAll();
  return response.status(200).json(Customer);
};

export const get_company = async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await CompanyService.getById(id);

  if (item) {
    return response.status(200).json(item);
  }
  return response.status(404).json(
    { msg: "no Customer with that phoneNumber" },
  );
};

export const create_company = async (request: Request, response: Response) => {
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

    let item: Company = {
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

    item = await CompanyService.create(item);

    return response.status(200).json(item);
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

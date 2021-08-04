import { Request, Response } from "express";
import SerieDocService from "../../services/sales/serieDoc";
import SerieDoc from "../../models/sales/serieDoc";

export const get_all_serieDocs = async (request: Request, response: Response) => {
  const items = await SerieDocService.getAll();
  return response.status(200).json(items);
};

export const get_serieDoc = async (request: Request, response: Response) => {
  const { id } = request.params;

  const item = await SerieDocService.getByCode(id);

  if (item) {
    return response.status(200).json(item);
  }
  return response.status(404).json({ msg: "no order with that id" });
};

export const create_serieDoc = async (request: Request, response: Response) => {
  const {
    code,
    description,
    begin,
    end
  } = await request.body;

  try {
    let item: SerieDoc = {
      code,
      description,
      begin,
      end
    };

    item = await SerieDocService.create(item);

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

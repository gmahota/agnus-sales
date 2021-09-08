import { Request, Response } from "express";
import docservice from "../../services/sales/document";
import serieService from "../../services/sales/serieDoc";
import typeService from "../../services/sales/typeDoc";
import Document from "../../models/sales/document";

export const get_all_docs = async (request: Request, response: Response) => {

  let type = request.query.type as string;

  const items = await docservice.getAll({ type });
  return response.status(200).json(items);
};

export const get_doc = async (request: Request, response: Response) => {
  const { id } = request.params;

  const order = await docservice.getById(id);

  if (order) {
    return response.status(200).json(order);
  }
  return response.status(404).json({ msg: "no order with that id" });
};

export const create_doc = async (request: Request, response: Response) => {

  console.log(request.body)

  const {
    code,
    type,
    serie,
    date,
    customer,
    name,
    vatTotal,
    discountTotal,
    grossTotal,
    status,
    total,
    items,
  } = await request.body;



  try {
    let doc: Document = {
      id: 0,
      number: 0,
      code,
      date,
      customer,
      name,
      vatTotal,
      discountTotal,
      grossTotal,
      status,
      total,
      items,
    };

    if (!!type) {
      doc.type = await typeService.getByCode(type)
    }

    if (!!serie) {
      doc.serie = await serieService.getByCode(serie)
    }

    doc = await docservice.create(doc);

    return response.status(200).json(doc);
  } catch (e) {
    return response.status(404).json(
      { msg: "error to create a document with that i", error: e },
    );
  }
};

export const delete_order = async (request: Request, response: Response) => {
  return response.status(500).json(
    { msg: "not Implemented" },
  );
  const { id } = request.body;

  try {
    //await docservice.remove(id);

    return response.send(200).json({ id: id });
  } catch (e) {
    return response.send(404).json(
      { msg: "error to create a order with that i" },
    );
  }
};

export const create_doc_items_variant = async (request: Request, response: Response) => {

  try {

    const { docItemsVariant } = request.body;
    console.log(docItemsVariant)
    const items = await docservice.createOrUpdate(docItemsVariant);

    return response.status(200).json({ items });
  } catch (e) {
    return response.status(404).json(
      {
        msg: "error to create a doc items variant",
        error: e
      },
    );
  }
}

export const get_doc_items_variant = async (request: Request, response: Response) => {

  try {

    const { id } = request.params;
    const { status } = request.body;

    const items = await docservice.getAllDocumentVariants(
      { documentId: Number(id), status }
    );

    return response.status(200).json(items);
  } catch (e) {
    return response.status(404).json(
      {
        msg: "error to create a doc items variant",
        error: e
      },
    );
  }
}


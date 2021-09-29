import { Router } from "express";

import {
  get_all_orders,
  get_order,
  create_order,
} from "../controllers/sales/orderController";


import {
  get_all_serieDocs,
  get_serieDoc,
  create_serieDoc,
} from "../controllers/sales/serieDocController";

import {
  get_all_typeDocs,
  get_typeDoc,
  create_typeDoc,
} from "../controllers/sales/typeDocController";

import {
  get_all_docs,
  get_doc,
  create_doc,
  create_doc_items_variant,
  get_doc_items_variant,
  get_approved_qoutes
} from "../controllers/sales/documentController";

const salesRouter = Router();

salesRouter
  .get("/orders", get_all_orders)
  .get("/orders/:id", get_order)
  .post("/order", create_order);

salesRouter
  .get("/typedoc", get_all_typeDocs)
  .get("/typedoc/:id", get_typeDoc)
  .post("/typedoc", create_typeDoc);

salesRouter
  .get("/series", get_all_serieDocs)
  .get("/series/:id", get_serieDoc)
  .post("/series", create_serieDoc);

salesRouter
  .get("/documents", get_all_docs)
  .get("/documents/:id", get_doc)
  .post("/documents", create_doc)
  .post("/documents/:id/itemsVariant", create_doc_items_variant)
  .get("/documents/:id/itemsVariant", get_doc_items_variant)

  .get("/customer/:id/approvedQoutes", get_approved_qoutes)

export default salesRouter;
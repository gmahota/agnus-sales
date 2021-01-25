import { Router } from "express";

import {
  get_all_orders,
  get_order,
  create_order,
} from "../controllers/sales/orderController";

const salesRouter = Router();

salesRouter.get("/orders", get_all_orders);
salesRouter.get("/orders/:id", get_order);
salesRouter.post("/orders/", create_order);

export default salesRouter;

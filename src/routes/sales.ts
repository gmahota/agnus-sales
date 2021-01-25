import { Router } from "express";

import {
  get_all_orders,
  get_order,
  create_order,
} from "../controllers/sales/orderController";

import {
  get_all_payments,
  get_payment,
  create_payment,
} from "../controllers/sales/paymentController";

const salesRouter = Router();

salesRouter.get("/orders", get_all_orders);
salesRouter.get("/orders/:id", get_order);
salesRouter.post("/orders/", create_order);

salesRouter.get("/payments", get_all_payments);
salesRouter.get("/payments/:id", get_payment);
salesRouter.post("/payments/", create_payment);

export default salesRouter;

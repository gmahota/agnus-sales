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

salesRouter.get("/api/orders", get_all_orders);
salesRouter.get("/api/orders/:id", get_order);
salesRouter.post("/api/orders/", create_order);

salesRouter.get("/api/payments", get_all_payments);
salesRouter.get("/api/payments/:id", get_payment);
salesRouter.post("/api/payments/", create_payment);

export default salesRouter;

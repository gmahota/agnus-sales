import { Router, Request, Response } from "express";
import authMiddleware from "./middlewares/auth";

import MpesaController from "./controllers/MpesaController";

import {
  get_all_users,
  get_user,
  create_user,
  delete_user,
} from "./controllers/admin/userController";

import AuthController from "./controllers/admin/authController";

import {
  get_all_orders,
  get_order,
  create_order
} from "./controllers/sales/orderController";

import {
  get_all_payments,
  get_payment,
  create_payment
} from "./controllers/sales/paymentController";

import {
  get_all_customers,
  get_customer,
  create_customer,
  get_customer_publication
} from "./controllers/base/customerController";

const routes = Router();

routes.get("/", async (request: Request, response: Response) => {
  response.send("WellCome!");
});

routes.get("/mpesa/receivemoney", MpesaController.receiveMoney);

routes
  .get("/api/users", get_all_users)
  .get("/api/users/:id", get_user)
  .post("/api/users", create_user)
  .delete("/api/users/:id", delete_user)

  .post("/api/auth/login", AuthController.login)
  .get("/api/auth/guest", AuthController.guest)
  .get("/api/auth/auth", authMiddleware, AuthController.auth)
  
  .get("/api/orders", get_all_orders)
  .get("/api/orders/:id", get_order)
  .post("/api/orders/",create_order)

  .get("/api/payments", get_all_payments)
  .get("/api/payments/:id", get_payment)
  .post("/api/payments/",create_payment)

  .get("/api/customer", get_all_customers)
  .get("/api/customer/:phonenumber", get_customer)
  .get("/api/customer/:phonenumber/publications",get_customer_publication)
  .post("/api/customer/",create_customer)
  
export default routes;

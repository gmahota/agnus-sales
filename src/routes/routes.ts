import { Router, Request, Response } from "express";
import authMiddleware from "../middlewares/auth";

// System Routers
import adminRouter from "./admin";
import authRouter from "./auth";


import MpesaController from "../controllers/MpesaController";

import AuthController from "../controllers/admin/authController";

import {
  get_all_orders,
  get_order,
  create_order
} from "../controllers/sales/orderController";

import {
  get_all_payments,
  get_payment,
  create_payment
} from "../controllers/sales/paymentController";

import {
  get_all_customers,
  get_customer,
  create_customer
} from "../controllers/base/customerController";

import {
  get_all_products,
  get_product,
  create_product
} from "../controllers/base/productController";

import {
  get_all_projects,
  get_project,
  create_project
} from "../controllers/base/projectController";


const routes = Router();

routes.use(adminRouter);
routes.use(authRouter);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home Page
 *     description: Can be used to testing an API.
*/
routes.get("/", async (request: Request, response: Response) => {
  response.send("WellCome!");
});

routes.get("/mpesa/receivemoney", MpesaController.receiveMoney);


routes
  
  .get("/api/orders", get_all_orders)
  .get("/api/orders/:id", get_order)
  .post("/api/orders/",create_order)

  .get("/api/payments", get_all_payments)
  .get("/api/payments/:id", get_payment)
  .post("/api/payments/",create_payment)

  .get("/api/customers", get_all_customers)
  .get("/api/customers/:phonenumber", get_customer)
  .post("/api/customers/",create_customer)
  
  .get("/api/products", get_all_products)
  .get("/api/products/:id", get_product)
  .post("/api/products/",create_product)

  .get("/api/projects", get_all_projects)
  .get("/api/projects/:id", get_project)
  .post("/api/projects/",create_project)
export default routes;

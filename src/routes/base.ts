import { Router } from "express";
import {
  get_all_customers,
  get_customer,
  create_customer
} from "../controllers/base/customerController";

import {
  get_all_companies,
  get_company,
  create_company
} from "../controllers/base/companyController";

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

import authMiddleware from "../middlewares/auth";

const baseRouter = Router();

baseRouter.get("/customers", get_all_customers)
baseRouter.get("/customers/:id", get_customer)
baseRouter.post("/customers/", create_customer)

baseRouter.get("/companies", get_all_companies)
baseRouter.get("/companies/:id", get_company)
baseRouter.post("/companies/", create_company)

baseRouter.get("/products", get_all_products)
baseRouter.get("/products/:id", get_product)
baseRouter.post("/products/", create_product)

baseRouter.get("/projects", get_all_projects)
baseRouter.get("/projects/:id", get_project)
baseRouter.post("/projects/", create_project)


//Change my password
//router.post("/change-password", [checkJwt], AuthController.changePassword);

export default baseRouter;
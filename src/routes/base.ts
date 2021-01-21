import { Router } from "express";
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

import authMiddleware from "../middlewares/auth";

const baseRouter = Router();

baseRouter.get("/api/customers", get_all_customers)
baseRouter.get("/api/customers/:phonenumber", get_customer)
baseRouter.post("/api/customers/",create_customer)
  
baseRouter.get("/api/products", get_all_products)
baseRouter.get("/api/products/:id", get_product)
baseRouter.post("/api/products/",create_product)

baseRouter.get("/api/projects", get_all_projects)
baseRouter.get("/api/projects/:id", get_project)
baseRouter.post("/api/projects/",create_project)


//Change my password
//router.post("/change-password", [checkJwt], AuthController.changePassword);

export default baseRouter;
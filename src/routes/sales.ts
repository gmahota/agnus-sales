import { Router } from "express";

import {
  get_all_orders,
  get_order,
  create_order,
} from "../controllers/sales/orderController";

const salesRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The order ID.
 *           example: 0
 *        code:
 *           type: integer
 *           description: User internal code.
 *           example: FA 2020/10
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 *         date:
 *           type: string 
 *           format: date-time
 *           description: Order Date.
 *           example: 2021-12-01
 *         customer:
 *           type: integer 
 *           description: The customer ID.
 *           example: 0  
 *        vat:
 *           type: integer 
 *           description: The customer ID.
 *           example: 0  
 *         status:
 *           type: string
 *           description: The user's name.
 *           example: open || Aproved || not Aproved
 *       total:
 *           type: integer 
 *           description: The customer ID.
 *           example: 0  
 */

/**
 * @swagger
 * /sales/orders:
 *   get:
 *     summary: Get Order's List JSONPlaceholder 
 *     description: Retrieve a list of Oriders from JSONPlaceholder. Can be used to testing an API.
 *     responses:
 *       200:
 *         description: A list of Orders.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                   $ref: '#/components/schemas/Order' 
 */

salesRouter.get("/orders", get_all_orders);
salesRouter.get("/orders/:id", get_order);

/**
 * @swagger
 * /sales/order:
 *   post:
 *     summary: Create new Order JSONPlaceholder 
 *     description: Retrieve a list of Oriders from JSONPlaceholder. Can be used to testing an API.
  *     parameters:
 *       - in: body
 *         name: body
 *         description: Create new Order.
 *         schema:
 *           $ref: '#/components/schemas/Order'  
 *     responses:
 *       200:
 *         description: A list of Orders.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'  
 */
salesRouter.post("/order/", create_order);

export default salesRouter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/admin/userController");
const adminRouter = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The user ID.
 *           example: 0
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 */
/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get User's List JSONPlaceholder
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
adminRouter.get("/users", userController_1.get_all_users);
/**
* @swagger
* /Admin/users/{id}:
*   get:
*     summary: Retrieve a single JSONPlaceholder user.
*     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
*       - in: path
*         name: id
*         required: true
*         description: Numeric ID of the user to retrieve.
*         schema:
*           type: string
*     responses:
*       200:
*         description: A single user.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 data:
*                   type: object
*                   properties:
*                     id:
*                       type: integer
*                       description: The user ID.
*                       example: 0
*                     name:
*                       type: string
*                       description: The user's name.
*                       example: Leanne Graham
*/
adminRouter.get("/users/:id", userController_1.get_user);
adminRouter.post("/users", userController_1.create_user);
adminRouter.delete("/users/:id", userController_1.delete_user);
exports.default = adminRouter;

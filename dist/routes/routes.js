"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// System Routers
const admin_1 = __importDefault(require("./admin"));
const auth_1 = __importDefault(require("./auth"));
const base_1 = __importDefault(require("./base"));
const sales_1 = __importDefault(require("./sales"));
const routes = (0, express_1.Router)();
/**
 * @swagger
 * /:
 *   get:
 *     summary: Home Page
 *     description: Can be used to testing an API.
*/
routes.get("/", async (request, response) => {
    response.send("WellCome!");
});
routes.use('/api/admin', admin_1.default);
routes.use('/api/auth', auth_1.default);
routes.use('/api/base', base_1.default);
routes.use('/api/sales', sales_1.default);
exports.default = routes;

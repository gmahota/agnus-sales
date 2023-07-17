"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
// System Routers
const base_1 = __importDefault(require("./base"));
const sales_1 = __importDefault(require("./sales"));
const routes = (0, express_1.Router)();
routes.get('/api', (request, response) => {
    const path = `/api/item/${(0, uuid_1.v4)()}`;
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    response.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
routes.get('/api/item/:slug', (request, response) => {
    const { slug } = request.params;
    response.end(`Item: ${slug}`);
});
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
routes.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
routes.use('/api/base', base_1.default);
routes.use('/api/sales', sales_1.default);
exports.default = routes;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// System Routers
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
routes.get("/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send("WellCome!");
}));
routes.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
routes.use('/api/base', base_1.default);
routes.use('/api/sales', sales_1.default);
exports.default = routes;
//# sourceMappingURL=routes.js.map
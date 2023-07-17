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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
const baseRouter = (0, express_1.Router)();
baseRouter.get("/customers", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma_1.prisma.customer.findMany();
    return response.status(200).json({ items });
}));
baseRouter.get("/customers/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const customer = yield prisma_1.prisma.customer.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ customer });
}));
baseRouter.post("/customers/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createCustomer = zod_1.z.object({
        code: zod_1.z.string(),
        name: zod_1.z.string(),
        address: zod_1.z.string().optional(),
        cellphone: zod_1.z.string().optional(),
        vat: zod_1.z.string().optional(),
        province: zod_1.z.string().optional(),
        phoneNumber: zod_1.z.string().optional(),
        email: zod_1.z.string().optional()
    });
    const { code, name, address, vat, province, phoneNumber, cellphone, email } = createCustomer.parse(request.body);
    const _customer = yield prisma_1.prisma.customer.create({
        data: {
            code,
            name,
            address,
            vat,
            province,
            phoneNumber,
            cellphone,
            email
        }
    });
    return response.status(200).json({ _customer });
}));
baseRouter.get("/companies", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma_1.prisma.company.findMany();
    return response.status(200).json({ items });
}));
baseRouter.get("/companies/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const getItemBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getItemBody.parse(request.params);
    const item = yield prisma_1.prisma.company.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
}));
baseRouter.post("/companies/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        name: zod_1.z.string(),
        address: zod_1.z.string().optional(),
        cellphone: zod_1.z.string().optional(),
        vat: zod_1.z.string().optional(),
        province: zod_1.z.string().optional(),
        phoneNumber: zod_1.z.string().optional(),
        email: zod_1.z.string().optional()
    });
    const { code, name, address, vat, province, phoneNumber, cellphone, email } = createItem.parse(request.body);
    const item = yield prisma_1.prisma.company.create({
        data: {
            code,
            name,
            address,
            vat,
            province,
            phoneNumber,
            cellphone,
            email
        }
    });
    return response.status(200).json({ item });
}));
baseRouter.get("/products", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma_1.prisma.product.findMany();
    return response.status(200).json({ items });
}));
baseRouter.get("/products/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const getItemBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getItemBody.parse(request.params);
    const item = yield prisma_1.prisma.product.findUnique({
        where: {
            id
        }
    });
    return { item };
}));
baseRouter.post("/products/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        price: zod_1.z.number().optional()
    });
    const { code, description, price } = createItem.parse(request.body);
    const item = yield prisma_1.prisma.product.create({
        data: {
            code,
            description,
            price
        }
    });
    return response.status(200).json({ item });
}));
baseRouter.get("/projects", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma_1.prisma.project.findMany();
    return response.status(200).json(items);
}));
baseRouter.get("/projects/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const getItemBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getItemBody.parse(request.params);
    const item = yield prisma_1.prisma.project.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
}));
baseRouter.post("/projects/", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        status: zod_1.z.string().optional()
    });
    const { code, description, status } = createItem.parse(request.body);
    const item = yield prisma_1.prisma.project.create({
        data: {
            code,
            description,
            status
        }
    });
    return response.status(200).json({ item });
}));
exports.default = baseRouter;
//# sourceMappingURL=base.js.map
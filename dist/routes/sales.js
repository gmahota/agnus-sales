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
const salesRouter = (0, express_1.Router)();
salesRouter.get("/orders", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma_1.prisma.order.findMany();
    return response.status(200).json({ items });
}));
salesRouter.get("/orders/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const order = yield prisma_1.prisma.order.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ order });
}));
salesRouter.post("/order", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // const createCustomer = z.object({
    //   code: z.string(),
    //   name: z.string(),
    //   address: z.string().optional(),
    //   cellphone: z.string().optional(),
    //   vat: z.string().optional(),
    //   province: z.string().optional(),
    //   phoneNumber: z.string().optional(),
    //   email: z.string().optional()
    // })
    const { code, date, customer, name, totalVat, totalDiscount, totalGross, status, total, items, } = yield request.body;
    const order = yield prisma_1.prisma.order.create({
        data: {
            date,
            code,
            customer,
            name,
            totalVat,
            totalDiscount,
            totalGross,
            total,
            status,
            items
        }
    });
    return response.status(200).json({ order });
}));
salesRouter.get("/typedoc", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma_1.prisma.documentType.findMany();
    return response.status(200).json({ items });
}));
salesRouter.get("/typedoc/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const item = yield prisma_1.prisma.documentType.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
}));
salesRouter.post("/typedoc", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        type: zod_1.z.string().optional()
    });
    const { code, description, type } = createItem.parse(request.body);
    const item = yield prisma_1.prisma.documentType.create({
        data: {
            code,
            description,
            type
        }
    });
    return response.status(200).json({ item });
}));
salesRouter.get("/series", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma_1.prisma.documentSerie.findMany();
    return response.status(200).json({ items });
}));
salesRouter.get("/series/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const item = yield prisma_1.prisma.documentSerie.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
}));
salesRouter.post("/series", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        begin: zod_1.z.date(),
        end: zod_1.z.date()
    });
    const { code, description, begin, end } = createItem.parse(request.body);
    const item = yield prisma_1.prisma.documentSerie.create({
        data: {
            code,
            description,
            begin,
            end
        }
    });
    return response.status(200).json({ item });
}));
salesRouter.get("/documents", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma_1.prisma.document.findMany();
    return response.status(200).json({ items });
}));
salesRouter.get("/documents/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const item = yield prisma_1.prisma.document.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
}));
salesRouter.post("/documents", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // const createCustomer = z.object({
    //   code: z.string(),
    //   name: z.string(),
    //   address: z.string().optional(),
    //   cellphone: z.string().optional(),
    //   vat: z.string().optional(),
    //   province: z.string().optional(),
    //   phoneNumber: z.string().optional(),
    //   email: z.string().optional()
    // })
    const { code, number, date, name, totalVat, totalDiscount, totalGross, status, total, Type, Serie, Customer, Items, } = yield request.body;
    const item = yield prisma_1.prisma.document.create({
        data: {
            code,
            number,
            date,
            name,
            totalVat,
            totalDiscount,
            totalGross,
            total,
            Type,
            status,
            Serie,
            Customer,
            Items
        }
    });
    return response.status(200).json({ item });
}));
// salesRouter.post("/documents/:id/itemsVariant", create_doc_items_variant)
// salesRouter.get("/documents/:id/itemsVariant", get_doc_items_variant)
// salesRouter.get("/customer/:id/approvedQoutes", get_approved_qoutes)
exports.default = salesRouter;
//# sourceMappingURL=sales.js.map
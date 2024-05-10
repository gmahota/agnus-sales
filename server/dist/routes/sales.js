"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
const salesRouter = (0, express_1.Router)();
salesRouter.get("/orders", async (request, response) => {
    const items = await prisma_1.prisma.order.findMany();
    return response.status(200).json({ items });
});
salesRouter.get("/orders/:id", async (request, response) => {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const order = await prisma_1.prisma.order.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ order });
});
salesRouter.post("/order", async (request, response) => {
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
    const { code, date, customer, name, totalVat, totalDiscount, totalGross, status, total, items, } = await request.body;
    const order = await prisma_1.prisma.order.create({
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
});
salesRouter.get("/typedoc", async (request, response) => {
    const items = await prisma_1.prisma.documentType.findMany();
    return response.status(200).json({ items });
});
salesRouter.get("/typedoc/:id", async (request, response) => {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const item = await prisma_1.prisma.documentType.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
});
salesRouter.post("/typedoc", async (request, response) => {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        type: zod_1.z.string().optional()
    });
    const { code, description, type } = createItem.parse(request.body);
    const item = await prisma_1.prisma.documentType.create({
        data: {
            code,
            description,
            type
        }
    });
    return response.status(200).json({ item });
});
salesRouter.get("/series", async (request, response) => {
    const items = await prisma_1.prisma.documentSerie.findMany();
    return response.status(200).json({ items });
});
salesRouter.get("/series/:id", async (request, response) => {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const item = await prisma_1.prisma.documentSerie.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
});
salesRouter.post("/series", async (request, response) => {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        begin: zod_1.z.date(),
        end: zod_1.z.date()
    });
    const { code, description, begin, end } = createItem.parse(request.body);
    const item = await prisma_1.prisma.documentSerie.create({
        data: {
            code,
            description,
            begin,
            end
        }
    });
    return response.status(200).json({ item });
});
salesRouter.get("/documents", async (request, response) => {
    const items = await prisma_1.prisma.document.findMany();
    return response.status(200).json({ items });
});
salesRouter.get("/documents/:id", async (request, response) => {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const item = await prisma_1.prisma.document.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
});
salesRouter.post("/documents", async (request, response) => {
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
    const { code, number, date, name, totalVat, totalDiscount, totalGross, status, total, Type, Serie, Customer, Items, } = await request.body;
    const item = await prisma_1.prisma.document.create({
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
});
// salesRouter.post("/documents/:id/itemsVariant", create_doc_items_variant)
// salesRouter.get("/documents/:id/itemsVariant", get_doc_items_variant)
// salesRouter.get("/customer/:id/approvedQoutes", get_approved_qoutes)
exports.default = salesRouter;

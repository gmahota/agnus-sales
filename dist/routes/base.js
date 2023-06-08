"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_1 = require("../lib/prisma");
const zod_1 = require("zod");
const baseRouter = (0, express_1.Router)();
baseRouter.get("/customers", async (request, response) => {
    const items = await prisma_1.prisma.customer.findMany();
    return response.status(200).json({ items });
});
baseRouter.get("/customers/:id", async (request, response) => {
    const getPoolBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getPoolBody.parse(request.params);
    const customer = await prisma_1.prisma.customer.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ customer });
});
baseRouter.post("/customers/", async (request, response) => {
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
    const _customer = await prisma_1.prisma.customer.create({
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
});
baseRouter.get("/companies", async (request, response) => {
    const items = await prisma_1.prisma.company.findMany();
    return response.status(200).json({ items });
});
baseRouter.get("/companies/:id", async (request, response) => {
    const getItemBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getItemBody.parse(request.params);
    const item = await prisma_1.prisma.company.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
});
baseRouter.post("/companies/", async (request, response) => {
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
    const item = await prisma_1.prisma.company.create({
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
    return { item };
});
baseRouter.get("/products", async (request, response) => {
    const items = await prisma_1.prisma.product.findMany();
    return response.status(200).json({ items });
});
baseRouter.get("/products/:id", async (request, response) => {
    const getItemBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getItemBody.parse(request.params);
    const item = await prisma_1.prisma.product.findUnique({
        where: {
            id
        }
    });
    return { item };
});
baseRouter.post("/products/", async (request, response) => {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        price: zod_1.z.number().optional()
    });
    const { code, description, price } = createItem.parse(request.body);
    const item = await prisma_1.prisma.product.create({
        data: {
            code,
            description,
            price
        }
    });
    return response.status(200).json({ item });
});
baseRouter.get("/projects", async (request, response) => {
    const items = await prisma_1.prisma.project.findMany();
    return response.status(200).json(items);
});
baseRouter.get("/projects/:id", async (request, response) => {
    const getItemBody = zod_1.z.object({
        id: zod_1.z.number()
    });
    const { id } = getItemBody.parse(request.params);
    const item = await prisma_1.prisma.project.findUnique({
        where: {
            id
        }
    });
    return response.status(200).json({ item });
});
baseRouter.post("/projects/", async (request, response) => {
    const createItem = zod_1.z.object({
        code: zod_1.z.string(),
        description: zod_1.z.string(),
        status: zod_1.z.string().optional()
    });
    const { code, description, status } = createItem.parse(request.body);
    const item = await prisma_1.prisma.project.create({
        data: {
            code,
            description,
            status
        }
    });
    return response.status(200).json({ item });
});
exports.default = baseRouter;

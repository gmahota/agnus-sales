import { Router,Request, Response } from "express";
import { prisma } from '../lib/prisma'

import { z } from 'zod'

import authMiddleware from "../middlewares/auth";

const baseRouter = Router();

baseRouter.get("/customers", async (request: Request, response: Response) => {
  const items = await prisma.customer.findMany();
  return { items }
})

baseRouter.get("/customers/:id", async (request: Request, response: Response) => {
  const getPoolBody = z.object({
    id: z.number()
  })

  const { id } = getPoolBody.parse(request.params)

  const customer = await prisma.customer.findUnique({
    where: {
      id
    }

  })

  return { customer }
})
baseRouter.post("/customers/", async (request: Request, response: Response) => {

  const createCustomer = z.object({
    code: z.string(),
    name: z.string(),
    address: z.string().optional(),
    cellphone: z.string().optional(),
    vat: z.string().optional(),
    province: z.string().optional(),
    phoneNumber: z.string().optional(),
    email: z.string().optional()
  })

  const { code,
    name,
    address,
    vat,
    province,
    phoneNumber,
    cellphone,
    email
  } = createCustomer.parse(request.body)

  const _customer = await prisma.customer.create({
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
  })

  return { _customer }
})

baseRouter.get("/companies", async (request: Request, response: Response) => {
  const items = await prisma.company.findMany();
  return { items }
})
baseRouter.get("/companies/:id", async (request: Request, response: Response) => {
  const getItemBody = z.object({
    id: z.number()
  })

  const { id } = getItemBody.parse(request.params)

  const item = await prisma.company.findUnique({
    where: {
      id
    }

  })

  return { item }
})
baseRouter.post("/companies/", async (request: Request, response: Response) => {

  const createItem = z.object({
    code: z.string(),
    name: z.string(),
    address: z.string().optional(),
    cellphone: z.string().optional(),
    vat: z.string().optional(),
    province: z.string().optional(),
    phoneNumber: z.string().optional(),
    email: z.string().optional()
  })

  const { code,
    name,
    address,
    vat,
    province,
    phoneNumber,
    cellphone,
    email
  } = createItem.parse(request.body)

  const item = await prisma.company.create({
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
  })

  return { item }
})

baseRouter.get("/products", async (request: Request, response: Response) => {
  const items = await prisma.product.findMany();
  return { items }
})
baseRouter.get("/products/:id", async (request: Request, response: Response) => {
  const getItemBody = z.object({
    id: z.number()
  })

  const { id } = getItemBody.parse(request.params)

  const item = await prisma.product.findUnique({
    where: {
      id
    }

  })

  return { item }
})
baseRouter.post("/products/", async (request: Request, response: Response) => {

  const createItem = z.object({
    code: z.string(),
    description: z.string(),
    price: z.number().optional()
  })

  const { code,
    description,
    price
  } = createItem.parse(request.body)

  const item = await prisma.product.create({
    data: {
      code,
      description,
      price
    }
  })

  return { item }
})

baseRouter.get("/projects", async (request: Request, response: Response) => {
  const items = await prisma.project.findMany();

  return response.status(200).json(items);
})
baseRouter.get("/projects/:id", async (request: Request, response: Response) => {
  const getItemBody = z.object({
    id: z.number()
  })

  const { id } = getItemBody.parse(request.params)

  const item = await prisma.project.findUnique({
    where: {
      id
    }

  })

  return { item }
})
baseRouter.post("/projects/", async (request: Request, response: Response) => {

  const createItem = z.object({
    code: z.string(),
    description: z.string(),
    status: z.string().optional()
  })

  const {
    code,
    description,
    status
  } = createItem.parse(request.body)

  const item = await prisma.project.create({
    data: {
      code,
      description,
      status
    }
  })

  return { item }
  
})

export default baseRouter;
import { Router, Request, Response } from "express";
import { prisma } from '../lib/prisma'

import { z } from 'zod'

const salesRouter = Router();

salesRouter.get("/orders", async (request: Request, response: Response) => {
  const items = await prisma.order.findMany();

  return response.status(200).json({ items })

});

salesRouter.get("/orders/:id", async (request: Request, response: Response) => {
  const getPoolBody = z.object({
    id: z.number()
  })

  const { id } = getPoolBody.parse(request.params)

  const order = await prisma.order.findUnique({
    where: {
      id
    }

  })

  return response.status(200).json({ order })
});

salesRouter.post("/order", async (request: Request, response: Response) => {

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

  const {
    code,
    date,
    customer,
    name,
    totalVat,
    totalDiscount,
    totalGross,
    status,
    total,
    items,
  } = await request.body;

  const order = await prisma.order.create({
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
  })

  return response.status(200).json({ order })
})

salesRouter.get("/typedoc", async (request: Request, response: Response) => {
  const items = await prisma.documentType.findMany();

  return response.status(200).json({ items })
});

salesRouter.get("/typedoc/:id", async (request: Request, response: Response) => {
  const getPoolBody = z.object({
    id: z.number()
  })

  const { id } = getPoolBody.parse(request.params)

  const item = await prisma.documentType.findUnique({
    where: {
      id
    }
  })
  return response.status(200).json({ item })

});

salesRouter.post("/typedoc", async (request: Request, response: Response) => {

  const createItem = z.object({
    code: z.string(),
    description: z.string(),
    type: z.string().optional()
  })

  const {
    code,
    description,
    type
  } = createItem.parse(request.body)

  const item = await prisma.documentType.create({
    data: {
      code,
      description,
      type
    }
  })

  return response.status(200).json({ item })

});

salesRouter.get("/series", async (request: Request, response: Response) => {
  const items = await prisma.documentSerie.findMany();
  return response.status(200).json({ items })
});

salesRouter.get("/series/:id", async (request: Request, response: Response) => {
  const getPoolBody = z.object({
    id: z.number()
  })

  const { id } = getPoolBody.parse(request.params)

  const item = await prisma.documentSerie.findUnique({
    where: {
      id
    }
  })
  return response.status(200).json({ item })
});

salesRouter.post("/series", async (request: Request, response: Response) => {

  const createItem = z.object({
    code: z.string(),
    description: z.string(),
    begin: z.date(),
    end: z.date()
  })

  const {
    code,
    description,
    begin,
    end
  } = createItem.parse(request.body)

  const item = await prisma.documentSerie.create({
    data: {
      code,
      description,
      begin,
      end
    }
  })

  return response.status(200).json({ item })

});

salesRouter.get("/documents", async (request: Request, response: Response) => {
  const items = await prisma.document.findMany();
  return response.status(200).json({ items })
});

salesRouter.get("/documents/:id", async (request: Request, response: Response) => {
  const getPoolBody = z.object({
    id: z.number()
  })

  const { id } = getPoolBody.parse(request.params)

  const item = await prisma.document.findUnique({
    where: {
      id
    }
  })

  return response.status(200).json({ item })
});

salesRouter.post("/documents", async (request: Request, response: Response) => {

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

  const {
    code,
    number,
    date,
    name,
    totalVat,
    totalDiscount,
    totalGross,
    status,
    total,
    Type,
    Serie,
    Customer,
    Items,
  } = await request.body;

  const item = await prisma.document.create({
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
  })

  return response.status(200).json({ item })
});

// salesRouter.post("/documents/:id/itemsVariant", create_doc_items_variant)
// salesRouter.get("/documents/:id/itemsVariant", get_doc_items_variant)

// salesRouter.get("/customer/:id/approvedQoutes", get_approved_qoutes)

export default salesRouter;
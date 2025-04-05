import { Router, Request, Response } from "express";
import { prisma } from '../../lib/prisma'

import { z } from 'zod'

const salesRouter = Router();

salesRouter.get("/typedoc", async (request: Request, response: Response) => {
  const items = await prisma.documentType.findMany({include: { Series: true }});

  return response.status(200).json(items)
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

export default salesRouter;
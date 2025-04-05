import { Router, Request, Response } from "express";
import { prisma } from '../../lib/prisma'

import { z } from 'zod'

const salesRouter = Router();

salesRouter.get("/series", async (request: Request, response: Response) => {
  const items = await prisma.documentSerie.findMany({include: { typeDoc: true }});
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
    begin: z.coerce.date().optional(),
    end: z.coerce.date().optional(),
    typeDocId: z.number()
  })

  const {
    code,
    description,
    begin,
    end,
    typeDocId
  } = createItem.parse(request.body)

  const item = await prisma.documentSerie.create({
    data: {
      code,
      description,
      begin,
      end,
      typeDocId
    }
  })

  return response.status(200).json({ item })

});

export default salesRouter;
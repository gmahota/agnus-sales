import { Router, Request, Response } from "express";

// System Routers
import baseRouter from "./base";
import salesRouter from "./sales";

const routes = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home Page
 *     description: Can be used to testing an API.
*/
routes.get("/", async (request: Request, response: Response) => {
  response.send("WellCome!");
});

routes.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

routes.use('/api/base',baseRouter);  
routes.use('/api/sales',salesRouter);  

export default routes;
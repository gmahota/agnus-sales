import { Router, Request, Response } from "express";
import {v4} from "uuid"

// System Routers
import baseRouter from "./base";
import salesRouter from "./sales";

const routes = Router();

routes.get('/api', (request: Request, response: Response) => {
  const path = `/api/item/${v4()}`;
  response.setHeader('Content-Type', 'text/html');
  response.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  response.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

routes.get('/api/item/:slug', (request: Request, response: Response) => {
  const { slug } = request.params;
  response.end(`Item: ${slug}`);
});
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
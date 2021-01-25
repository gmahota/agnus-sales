import path from "path";
import "dotenv/config";

import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";

import routes from "./routes/routes";
import errorHandler from "./errors/handler";

import "./database/connection";

import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();

const app = express();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Agnus Invoice API",
    version: "1.0.0",
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Guimarães Mahota',
      url: 'https://github.com/gmahota',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000/api',
      description: 'Development Local PC',
    },
    {
        url: 'https://agnusinvoiceapi.herokuapp.com/api',
        description: 'Development server',
      },
  ]
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./dist/routes/**/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
// Constants
const port = process.env.PORT || 5000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);
app.use(morgan('combined'))

app.listen(port);

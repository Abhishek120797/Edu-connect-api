import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Router } from "express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Edu-connect-api",
    version: "1.0.0",
    description: "Learning management system Api",
  },
  servers: [
    {
      url: "https://www.edu-connect.online/api/v1/",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/docs/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerRouter = Router();

swaggerRouter.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default swaggerRouter;

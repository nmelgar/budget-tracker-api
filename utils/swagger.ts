import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// import log from './logger'

const PORT = 3000;
const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Budget Tracker REST API",
      version: "1.0.0",
    },
    components: {
      securityChemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          beareFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes/routes.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
  // swagger page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // docs in json format
  app.get("docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;

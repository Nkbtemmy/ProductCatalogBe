import os from "os";

import swaggerDoc from "./swagger.json";
import { users } from "./users";
import { productCategory } from "./productCategory";
import { products } from "./product";

const defaults = swaggerDoc.paths;

const paths = {
  ...defaults,
  ...users,
  ...productCategory,
  ...products
};

const config = {
  swagger: "2.0",
  info: {
    version: "1.0.0.",
    title: "Web App APIs Documentation",
    description: "",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      name: `${os.hostname()}`,
    },
    {
      url: `https://${process.env.HOST}`,
      name: `${os.hostname()}`,
    },
  ],

  basePath: `/api/${process.env.API_VERSION || "v1"}`,
  schemes: ["http", "https"],
  securityDefinitions: {
    ApiKeyAuth: {
      type: "apiKey",
      name: "X-API-KEY",
      in: "header",
      description: "API Key required in the X-API-KEY header",
    },
  },
  tags: [
    {
      name: "Web App APIs Documentation",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths,
};
export default config;

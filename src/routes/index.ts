import { Router, Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";

import config from "../docs/index";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import productCategoryRouter from "./productCategory.routes";

const url = `/api/${process.env.API_VERSION || "v1"}`;
const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(config));
router.get("/api-docs.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(config);
});

router.use(`${url}/users`, userRoutes);
router.use(`${url}/categories`, productCategoryRouter);
router.use(`${url}/products`, productRoutes);

router.get('/', (req, res) => {
  res.send('Welcome to the App API');
});
router.all(`${url}/`, (req: Request, res: Response | any) => {
  return res.status(200).send({
    status: 200,
    message: "Default API Endpoint",
  });
});


router.use((err: Error, _req: Request, res: Response | any, next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).send({
    status: 500,
    message: "Something broke!",
  });
});

export default router;
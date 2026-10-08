import { Hono } from "hono";

import { healthController } from "@/controllers";
import { asyncHandler } from "@/middlewares";

const healthRouter = new Hono();

healthRouter.get("/", asyncHandler(healthController.getHealth));
healthRouter.get("/db", asyncHandler(healthController.getDbHealth));

export { healthRouter };

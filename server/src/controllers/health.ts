import { Context } from "hono";

import { sendSuccess } from "@/middlewares";
import { healthService } from "@/services/health.service";

const { getHealth, getDbHealth } = healthService;
export const healthController = {
    getHealth: async (c: Context) => {
        return sendSuccess(c, getHealth());
    },
    getDbHealth: async (c: Context) => {
        return sendSuccess(c, await getDbHealth(), "Database is healthy");
    },
};

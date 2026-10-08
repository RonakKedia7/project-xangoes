import { sql } from "drizzle-orm";

import { db } from "@/db/schema";
import { CustomError } from "@/middlewares";

/**
 * @description Health service to check the health of the server
 */
class HealthService {
    /**
     * @description Get the health status of the server
     * @returns {object} - The health status
     */
    public getHealth() {
        return {
            status: "ok",
            message: "Server is healthy and running!",
        };
    }

    /**
     * @description Probe PostgreSQL with a real SELECT 1
     */
    public async getDbHealth() {
        try {
            await db.execute(sql`SELECT 1`);
            return {
                status: "ok",
                database: "connected",
            };
        } catch (error) {
            throw new CustomError(
                "Database is unavailable",
                503,
                error instanceof Error ? error.message : error
            );
        }
    }

    public about() {
        return {
            name: "Xangoes API",
            version: "1.0.0",
            maintainer: "DSC NITR",
        };
    }
}

export const healthService = new HealthService();

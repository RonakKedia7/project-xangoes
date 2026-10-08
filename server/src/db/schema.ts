import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { env } from "../config/env";
import * as schema from "./schema/index";

let pool = new Pool({
    connectionString: env.DATABASE_URL,
    connectionTimeoutMillis: 3000,
});

export let db = drizzle(pool, { schema });

export const resetDbConnection = async () => {
    await pool.end();
    pool = new Pool({
        connectionString: env.DATABASE_URL,
        connectionTimeoutMillis: 3000,
    });
    db = drizzle(pool, { schema });
};

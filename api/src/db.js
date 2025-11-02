// api/src/db.js
import pg from "pg";
const { Pool } = pg;

// Pool manages a set of connections to Postgres.
export const pool = new Pool({
  host: process.env.DB_HOST,        // e.g. localhost or mydb.xxxxxx.rds.amazonaws.com
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,    // e.g. appdb
  user: process.env.DB_USER,        // e.g. postgres
  password: process.env.DB_PASSWORD,
  // For local dev set DB_SSL=false. For RDS leave SSL ON (default).
  ssl: process.env.DB_SSL === "false" ? false : { rejectUnauthorized: true }
});

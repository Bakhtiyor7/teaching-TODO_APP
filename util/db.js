import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();
// !
// it's important to use dotenv.config(), if not env file won't be loaded

// pool automatically creates connection and releases connection after each query
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

export default pool;

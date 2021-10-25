import pg from 'pg'
import dotenv from 'dotenv'
const { Pool } = pg

dotenv.config()
const pool = new Pool({
  host: 'localhost',
  user: process.env.DB_USER,
  port: 5432,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})
export default pool

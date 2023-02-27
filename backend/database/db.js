import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const {Pool} = pg

export const pool = new Pool({
    database:process.env.DATABASE_NAME,
    port:process.env.DATABASE_PORT,
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
});

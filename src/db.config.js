import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    password:"sami",
    host: 'localhost',
    port:5432,
    database: 'smart_shop'
})
export default pool;
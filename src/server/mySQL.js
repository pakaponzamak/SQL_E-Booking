import mysql from 'mysql2/promise';

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Test_Booking',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

export default pool;
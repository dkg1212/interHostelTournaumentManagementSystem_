const mysql = require('mysql2/promise');
const dotenv=require('dotenv');

dotenv.config();

const mysqlpool= mysql.createPool({
  host: "localhost",
  user: "root",
  password: "#Dimpal1",
  database: "inter_hostel_db"
  /*host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT*/
});

module.exports = mysqlpool;

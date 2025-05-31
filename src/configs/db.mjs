import mysql from "mysql2/promise";

// create the connection to database
const connection = mysql.createPool({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "120806",
  database: "nodejsbasic",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export default connection;

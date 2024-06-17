const mysql = require ("mysql2/promise");

const mySqlPool = mysql.createPool({
   host: "localhost",
   user: "root",
   database: "students_db",
   password: "T@nuj123", 
});

module.exports = mySqlPool;
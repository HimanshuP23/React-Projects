const mysql = require("mysql");

var mysqlconnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "mysql",
  database: "iacsd0924",
  port: "3306",
});

mysqlconnection.connect((err) => {
  if (!err) {
    console.log("connection established");
  } else {
    console.log("connection failed" + JSON.stringify(err));
  }
});

module.exports = mysqlconnection;

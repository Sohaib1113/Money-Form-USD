var mysql = require("mysql");

var con = mysql.createConnection ({
host: "localhost",
user:"root",
password:"",
database:"money1"
});

module.exports = con;
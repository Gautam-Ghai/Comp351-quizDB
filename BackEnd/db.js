const mysql = require('mysql');

var db  = mysql.createPool({
    connectionLimit : 10,
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b72a145e346ab7',
    password: 'd1ca75b4',
    database: 'heroku_508bb777301f9e6'
  });
  
module.exports = db;
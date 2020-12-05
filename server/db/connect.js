var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'db4free.net',
  // host: 'localhost',
  user: 'whf605319646',
  // user: 'root',
  password: 'admin123',
  // password: '123456',
  database: 'vantstore'
});

connection.connect();

module.exports = connection;

const mysql = require('mysql');

const connectn = mysql.createConnection({
    host: 'localhost',     // Your MySQL server's hostname or IP address
    user: 'root', // Your MySQL username
    password: 'Aloha@2024', // Your MySQL password
    database: 'formdb' // Name of the database you want to connect to
  });

  module.exports = connectn;
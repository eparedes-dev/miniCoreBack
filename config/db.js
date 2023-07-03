const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ari',
    password: '123456',
    database: 'minicorebd'
  });

module.exports = connection;
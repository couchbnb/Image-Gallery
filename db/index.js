const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'couchbnb',
});

connection.connect((err, sucsess) => {
  if (err) {
    console.log(' we had an error :', err);
  } else {
    console.log('connected to DB', sucsess);
  }
});

module.exports = connection;

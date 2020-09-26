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
// test connection and querry
connection.query('SELECT * from gallery where id = 1', (error, results) => {
  if (error) throw error;
  console.log('The test : ', results);
});

module.exports = connection;

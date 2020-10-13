const mysql = require('mysql');

// make changes for deployment change local host to mysql, and add password.
const connection = mysql.createConnection({
  // host: 'localhost',
  host: 'mysql',
  user: 'root',
  password: 'student',

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

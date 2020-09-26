const db = require('../db/index.js');

const getPageInfo = (id, callback) => {
  const query = 'SELECT * FROM gallery WHERE id = ?';
  db.query(query, [id], callback);
};

module.exports = {
  getPageInfo,
};

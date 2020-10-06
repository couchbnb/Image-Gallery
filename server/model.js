const db = require('../db/index.js');

const getPageInfo = (id, callback) => {
  const query = 'SELECT * FROM gallery WHERE id = ?';
  db.query(query, [id], callback);
};
const updateLiked = (params,callback) => {
  const update = 'UPDATE gallery set is_super = ? WHERE id = ?';
  db.query(update, params, callback);
};

module.exports = {
  getPageInfo,
  updateLiked
};

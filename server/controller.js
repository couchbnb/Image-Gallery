const model = require('./model.js');

const getPageInfo = (req, res) => {
  const { id } = req.params;
  console.log(req.params, 'param');
  model.getPageInfo(id, ((err, results) => {
    if (err) {
      console.log('we had an error ', err);
      res.status(400).send(err);
    } else {
      // will remove console log
      console.log('winning ', results);
      res.status(200).send(results);
    }
  }));
};

const updateLiked = (req, res) => {
  console.log(req.body);
  const { id, is_liked } = req.body;
  model.updateLiked([is_liked, id], ((err, results) => {
    if (err) {
      console.log('we had an error on the update ', err);
      res.status(400).send(err);
    } else {
      console.log('wiinning', results);
      res.status(200).send(results);
    }
  }));
};

module.exports = {
  getPageInfo,
  updateLiked,
};

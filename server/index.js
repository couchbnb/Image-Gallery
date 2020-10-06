const express = require('express');
var path = require('path');
const app = express();
const port = 3061;
const controller = require('./controller.js');

// middleware

app.use(express.json());
// serving static files;
app.use('/listing/:id', express.static(path.join(__dirname, '../client/dist')));

// request information from API;
app.get('/data/:id', controller.getPageInfo);
// update is liked heart;
app.patch('/data/update', controller.updateLiked);

app.listen(port, () => {
  console.log(`Gallery app listening at http://localhost:${port}`);
});

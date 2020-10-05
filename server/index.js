const express = require('express');
var path = require('path');
const app = express();
const port = 3000;
const controller = require('./controller.js');

// middleware

app.use(express.json());

app.use('/listing/:id', express.static(path.join(__dirname, '../client/dist')));

// modle
app.get('/data/:id', controller.getPageInfo);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

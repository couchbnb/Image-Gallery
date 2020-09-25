const express = require('express');

const app = express();
const port = 3000;
const controller = require('./controller.js');

// middleware

app.use(express.json());

// modle
app.get('/', controller.getPageInfo);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

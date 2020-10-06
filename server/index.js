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

app.patch('/data/update', controller.updateLiked);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// app.patch('/update/cat', (req,res)=>{
//   console.log("patch hit ", req.body)
//   params = [req.body.category_id,req.body.id]

//   db.connection.query('UPDATE transactions set category_id = ? WHERE id = ?', params,function(error, results){
//     if(error){
//       console.log("we had an eror in db on patch",error)
//       res.status(400).send(error)
//     }else{
//       console.log("patch winning",results);
//       res.status(200).send()
//     }
//   })

//   res.send("patch")
// })

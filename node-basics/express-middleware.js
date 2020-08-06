const express = require ('express');
const app = express ();
const port = process.env.PORT || 8080;

app.use ('/', (req, res, next) => {
  console.log ('MiddleWare');
  next ();
});
app.get ('/', (req, res) => {
  res.send ('<h1>Hello Express</h1>');
});

app.get ('/api', (req, res) => {
  //res.send ('<h1>Hello API Page</h1>');
  res.json ({name: 'Arun'});
});

app.listen (port);
console.log ('Its Working');

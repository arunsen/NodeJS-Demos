const express = require ('express');
const app = express ();
const port = process.env.PORT || 8080;
const bodyParser = require ('body-parser');

app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: false}));

app.use ('/', (req, res, next) => {
  console.log ('MiddleWare');
  next ();
});
app.post ('/post', (req, res) => {
  console.log (`Its working ${req.body}`);
});

app.listen (port);
console.log ('Its Working');

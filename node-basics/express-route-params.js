const express = require ('express');
const app = express ();
const port = process.env.PORT || 8080;

app.get ('/', (req, res) => {
  res.send (`
        <p>HOME</p>
      `);
});
app.get ('/post/:id', (req, res) => {
  res.send (`
      <p>Here is ${req.params.id}</p>
    `);
});

app.listen (port);

console.log ('Listening...');

const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const bcrypt = require ('bcryptjs');
const User = require ('./models/Users');
const port = process.env.PORT || 8080;

//Middleware Use bodyParser to get req Object in req.body
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));

mongoose.Promise = global.Promise;

//Mong DB connection with mongoose

mongoose
  .connect (
    'MongoDBURIHERE',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
    () => {
      console.log ('Connected');
    }
  )
  .catch (err => console.log (err.reason));

app.post ('/register', (req, res) => {
  const newUser = new User ();

  newUser.email = req.body.email;
  newUser.password = req.body.password;

  bcrypt.genSalt (10, (err, salt) => {
    bcrypt.hash (newUser.password, salt, (err, hash) => {
      if (err) return console.log (err);
      newUser.password = hash;
      newUser
        .save ()
        .then (userSaved => {
          res.status (200).send ('User Registered');
          console.log ('User Saved', userSaved);
        })
        .catch (err => {
          console.log ('User was not Saved because of', err);
        });
    });
  });
});

app.post ('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne ({email}).then (user => {
    if (user) {
      bcrypt.compare (password, user.password, (err, matched) => {
        if (matched) {
          res.status (200).send ('USER ABLE TO LOGIN');
        } else {
          res.status (200).send ('USER NOT ABLE TO LOGIN');
        }
      });
    }
  });
});

app.listen (port, () => {
  console.log (`listening to port ${port}`);
});

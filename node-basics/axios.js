const axios = require ('axios');

const userName = 'arunsen';

axios
  .get ('https://api.github.com/users/' + userName)
  .then (res => {
    console.log (res.data);
  })
  .catch (err => {
    console.log (err);
  });

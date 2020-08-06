const fs = require ('fs');

fs.access ('./views', err => {
  if (err) {
    console.log ('The folder does not exists');
    fs.mkdir ('views', err => {
      if (err) return err;
      fs.writeFile ('./views/new.txt', 'HELLO', err => {
        if (err) return err;
      });
    });
  }
});

const fs = require ('fs');

fs.readdir ('./', (err, content) => {
  if (err) return err;

  console.log (content);
});

fs.readFile ('notes.txt', 'UTF-8', (err, content) => {
  if (err) return err;
  console.log (content);
});

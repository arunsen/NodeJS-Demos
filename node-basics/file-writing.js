const fs = require ('fs');

fs.writeFile (
  'notes.txt',
  '\n This is created using writeFile \n',
  'utf8',
  err => {
    if (err) return err;
    console.log ('File has been saved');
  }
);

fs.appendFile (
  'notes.txt',
  '\nThis is appended text created using writeFile\n',
  'utf8',
  err => {
    if (err) return err;
    console.log ('File has been saved');
  }
);

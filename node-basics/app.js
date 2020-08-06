const fs = require ('fs');
const validator = require ('validator');
const chalk = require ('chalk');
const yargs = require ('yargs');

const name = require ('./utils');
const getNotes = require ('./notes');

fs.writeFileSync ('notes.txt', 'This file was created with Node JS!');
fs.appendFileSync ('notes.txt', ' By Arun');
const msg = getNotes ();

yargs.command ({
  command: 'add',
  describe: 'Adding a note',
  handler: function () {
    console.log ('Adding a Note');
  },
});
console.log (name);
console.log (chalk.bold.bgGreen.whiteBright (msg));
console.log (validator.isEmail ('arun@gmail.com'));
console.log (validator.isURL ('https://google.com'));

console.log (process.argv[2]);
console.log (yargs.argv); // node app.js add --title="Thing to buy"

const readline = require ('readline');
const util = require ('util');

var RL = readline.createInterface (process.stdin, process.stdout);

RL.question ('What is your name?', name => {
  RL.setPrompt (`${name} how old are you?`);

  RL.prompt ();

  RL.on ('line', age => {
    util.log (`${name} great you are ${age} years old`);
  });
});

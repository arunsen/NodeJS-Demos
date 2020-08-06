const events = require ('events');

let emitter = new events.EventEmitter ();

emitter.on ('newEvent', message => {
  console.log (`Message from event ${message}`);
});

emitter.emit ('newEvent', 'Hello from Arun');

const fs = require ('fs');

// fs.rmdirSync ('./views');

try {
  fs.unlinkSync ('./views/new.txt');
} catch (err) {
  console.log (err + ' here is the error');
}

const http = require ('http');
const fs = require ('fs');

const server = http.createServer ((req, res) => {
  if (req.url === '/') {
    fs.readFile ('./global.html', 'UTF-8', (err, data) => {
      res.writeHead (200, {'Content-Type': 'text/html'});
      res.end (data);
    });
  } else {
    res.writeHead (404, {'Content-Type': 'text/plain'});
    res.end ('Error Resource not found');
  }
});

server.listen (8080);

console.log ('Server is running...');

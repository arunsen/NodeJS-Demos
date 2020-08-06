const http = require ('http');
const https = require ('https');
const fs = require ('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

const server = http.createServer ((req, serverRes) => {
  if (req.method === 'GET' && req.url === '/posts') {
    https.get (url, httpRes => {
      httpRes.setEncoding ('utf8');
      let body = '';

      httpRes.on ('data', data => {
        serverRes.write (data);
      });

      httpRes.on ('end', () => {
        fs.writeFile ('data.json', body, 'utf8', err => {
          if (err) return err;
          console.log ('Just pulled the posts and created a file');
          serverRes.end ();
        });
      });
    });
  } else {
    serverRes.writeHead (404, {'Content-Type': 'text/plain'});
    serverRes.end ('404 Error not found');
  }
});

server.listen (8080);

console.log ('Server is running...');

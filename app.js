const http = require('http');
const port = process.env.PORT || 8080;
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World from minimal server!\n');
  })
  .listen(port, () => {
    console.log(`Minimal server running at http://127.0.0.1:${port}/`);
  });

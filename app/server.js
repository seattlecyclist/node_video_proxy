import proxy from './proxy';

const http = require('http');
const url = require('url');

const port = 3000;

const requestHandler = (request, response) => {

  const url_parts = url.parse(request.url, true);
  const query = url_parts.query;

  if (request.url.match(/video/)) {
    proxy(request, response);
  }
};

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

const http = require('http');
const port = 5501;
const hostname = '127.0.0.1';
const router = require('./router');
// const gen = require('./generator');
const render = require('./render')

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.ipsumResults(request,response);
  response.end();
})

server.listen(port, ()=> {
  console.log(`Server running at http://${hostname}:${port}/`)
})
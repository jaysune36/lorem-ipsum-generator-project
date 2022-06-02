let renderer = require('./render');
let commonHeader = {'Content-Type': 'text/html'};
let https = require('https');
let http = require('http');
let queryString = require('querystring');

// function printError(error) {
//   console.error(error.message);
// }

function home(request, response) {
  // if(request.url === '/') {
  //   response.writeHead(200, commonHeader);
  //   renderer.view('header', {}, response);
  //   renderer.view('main', {}, response);
  //   renderer.view('footer', {}, response);
  //   renderer.style('main', {}, response);
  //   response.end()
  // }
  if(request.url === '/') {
    response.writeHead(200, commonHeader);
    renderer.view('header', {}, response);
    renderer.view('main', {}, response);
    renderer.view('footer', {}, response);
    response.end();
  }
  else if (request.url === '/css/main.css') {
    response.writeHead(200, {'Content-Type':'text/css'});
    renderer.style('main', {}, response);
    response.end();
  } else if (request.url === '/generator.js') {
    response.writeHead(200, {'Content-Type':'application/javascript'});
    response.writeFile('/generator.js')
    response.end();
  } else {
    response.write('invalid request');
    response.end();
  }
    
}

function ipsumResults(request, response) {
  let resultValue = request.url.replace("/", "");
  if(resultValue.length > 0) {
    response.writeHead(200, commonHeader);
    renderer.view('header', {}, response);
    renderer.view('results', {}, response);
    renderer.view('footer', {}, response);
    response.end();
  }
}

module.exports.home = home;
module.exports.ipsumResults = ipsumResults;
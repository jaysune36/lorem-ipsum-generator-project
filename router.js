let renderer = require('./render');
let results = require('./results')
let commonHeader = {'Content-Type': 'text/plain'};

function home(request, response) {
  if(request.url === '/') {
    response.writeHead(200, commonHeader);
    renderer.view('header', {}, response);
    renderer.view('main', {}, response);
    renderer.view('footer', {}, response);
    response.end()
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
const fs = require('fs');
const { builtinModules } = require('module');

function view(fileName, response) {
  let filesContent = fs.readFileSync(`./views/${fileName}.html`, {encoding:'utf-8'});
  response.write(filesContent)
}

module.exports.view = view;
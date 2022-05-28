const fs = require('fs');
const { builtinModules } = require('module');

function mergeValues(values, content) {
  for(let key in values) {
    content = content.replace(`{{${key}}}`, values[key]);
  }
  return content;
}

function view(fileName, value, response) {
  let filesContent = fs.readFileSync(`./views/${fileName}.html`, {encoding:'utf-8'});
  filesContent = mergeValues(value, filesContent);
  response.write(filesContent)
}

module.exports.view = view;
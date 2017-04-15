var fs = require('fs');
var path = require('path');
var root = path.resolve(__dirname, '../');

var content = fs.readFileSync(`${root}/dist/element-ui.js`, 'utf-8');
content = content.replace('"./dist/"', 'window.ElementUiRes');
fs.writeFileSync(`${root}/dist/element-ui.js`, content, 'utf-8');

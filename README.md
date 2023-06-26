# fspx library
stands for fs-proxy

usage below(me lazy)
```js
const fspx = require('./fspx');
// Get content from ./src/index.js
console.log(fspx['index.js']._content);
// Get content from very deep log
console.log(fspx.path.to.logfolder['latest.log']._content);
// Get content from subfolder using single []
console.log(fspx['path/to\\subfolder/latest.log']._content);
// Get stat of a file
console.log(fspx.src['latest.log']._stat);
// Get all files/subfolders in a folder
console.log(fspx.afolder._entries);
// Write to file
fspx['testfile.js'] = 'hello world';
// Check if file is in folder
console.log('h.js' in fspx.src);
```
uwu

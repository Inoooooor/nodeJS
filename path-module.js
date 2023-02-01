const path = require('path');
console.log(path.sep);
const textFilePath = path.join('/bruh', 'bruh1', 'text.txt');
console.log(textFilePath);
const base = path.basename(textFilePath);
console.log(base);
const absolutePath = path.resolve(__dirname, 'bruh', 'bruh1', 'text.txt');
console.log(absolutePath, 'asdas');
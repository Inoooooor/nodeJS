const sayMethods = require("./funcs-module");
const names = require("./names-module.js");
const sibs = require("./mind-grenade.js");
const os = require("os");
const { readFile, writeFile } = require("fs");
const http = require("http");

// Browser REQUESTS your server and gets RESPONSE
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("HELLOW SERVER WOROLD");
  } 
  if (request.url === "/about") {
    response.end("THIS IS ALL about");
  } 
  response.end(`
  <h1 style="color: red;">LOL YOU TRIPPING BRUV</h1>
  <a href="/">GET HOME</a>`);
});

// SETTING THE PORT TO LISTEN
server.listen(5000);

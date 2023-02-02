const http = require("http");

// Browser REQUESTS your server and gets RESPONSE
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HELLOW SERVER WOROLD");
  } else if (req.url === "/about") {
    res.end("THIS IS ALL about");
  } else {
    res.end(`
    <h1 style="color: red;">LOL YOU TRIPPING BRUV</h1>
    <a href="/">GET HOME</a>`);
  }
});

// SETTING THE PORT TO LISTEN
server.listen(5000);

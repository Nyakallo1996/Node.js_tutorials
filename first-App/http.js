const http = require("http");

// creating my web server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to our home page")
    }
  if(req.url === "/about") {
    res.end("Here is our short history")
  }
  res.end(`
  <h1>Oopa<h1>
  <p>We cant seem to find the page that you are looking for <P>`)
})

server.listen(5000)
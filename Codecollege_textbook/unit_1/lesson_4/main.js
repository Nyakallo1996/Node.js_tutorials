const port = 3000,
http = require("http");
httpStatus = require("http-status-codes"),
app = http.createServer((req, res) => {
    console.log("Recieved an incoming request!");
    res.writeHead(httpStatus.OK, { "Content-Type": "text/html" 
});
let responseMessage = "<h1>Hell, Universe!</h1>";
res.write(responseMessage);
res.end();
console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
// Serving static files with the fs module
const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
fs = require("fs");

const routeMap = {
    "/": "views/index.html" //Setting up route mapping for HTML files
}

http.createServer((req, res) => {  //Creating my server
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    if (routeMap[req.url]) {
        fs.readFile(routeMap[req.url], (error, data) => { 
            res.write(data);
            res.end();
        });
    } else {
        res.end("<h1>Sorry, not found.</h1>");
    }
})
.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
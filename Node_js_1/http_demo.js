const http  = require("http"); // Creating a webserver

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write("hello world");
    res.end();
})
.listen(5000, () => console.log("Server running..."));
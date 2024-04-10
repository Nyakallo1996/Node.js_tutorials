const url = require("url");

const myUrl = new URL("http://mywebsilte.com/hello.html?id=100&staus=active");

// Serialized URl
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domian)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is module (by default)

const names = require("./4-names");
const sayHi = require("./5-utils")


sayHi("Susan")
sayHi(names.peter)
sayHi(names.john)
const os = require("os");

let totalMemeory = os.totalmem();
let freeMemory = os.freemem();

console.log("Total memory: " + totalMemeory);
const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const MyEmitter = new MyEmitter();

// Event Listener
MyEmitter.on("event", () => console.log("Event Fired!"));

// Init event
MyEmitter.emit("event");
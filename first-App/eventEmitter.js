const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", function() {
    console.log("Listener called");
});

// Raise an event
emitter.emit("messageLogged"); // Making noise or producing something - signalling that an event has happened
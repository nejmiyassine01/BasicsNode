const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt')

rs.on('open', function () {
    console.log('The file is open');
})

const events = require('events');
const eventEmitter = new events.EventEmitter();

let myEventHandler = () => {
    console.log('I hear a scream!');
}

// Fire the 'scream' event:
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');

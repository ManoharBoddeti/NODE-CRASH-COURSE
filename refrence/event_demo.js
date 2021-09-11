const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

    // Init object
    const myEmitter = new MyEmitter()

    // Event listner
    MyEmitter.on('event', () => console.log('Event Fired'));

    // Init event
    MyEmitter.emit('event');
    MyEmitter.emit('event');
    MyEmitter.emit('event');
    MyEmitter.emit('event');


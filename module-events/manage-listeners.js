import EventEmitter from 'events';
import { setTimeout } from 'timers/promises';

console.log('Inicial Setup:')
await setTimeout(2000);

const event = new EventEmitter();
const printTotalListeners = () => {
    console.log(`The total of listeners is: ${event.listenerCount('open')}`)
}
console.log(`\nMax event listeners: ${event.getMaxListeners()}`)
printTotalListeners()

await setTimeout(4000);

//-------------------------------

console.log('\nConfig MaxListeners:')
await setTimeout(2000);

event.setMaxListeners(20);
console.log(`Max event listeners: ${event.getMaxListeners()}`)
await setTimeout(4000);

//-------------------------------

console.log('\nCreating Listeners:')
await setTimeout(2000);

const third_listener_function = () => console.log('3 open');

event.on('open', () => { console.log('1 open')})
event.on('open', () => { console.log('2 open')})
event.on('open', third_listener_function)
event.once('open', () => { console.log('This will be only call once - normal call')})
printTotalListeners()
await setTimeout(4000);

//-------------------------------

console.log('\nEmitting first event:\n')
await setTimeout(2000);

event.emit('open')

await setTimeout(4000);
printTotalListeners()
await setTimeout(2000);

//-------------------------------

console.log('\nExecuting only first listener:')
await setTimeout(2000);

const open_listeners = event.listeners('open');
open_listeners[0]();
await setTimeout(4000);

//-------------------------------

console.log('\nRemoving some listeners:')
await setTimeout(2000);

event.off('open', open_listeners[0])
event.off('open', third_listener_function)

await setTimeout(4000);
printTotalListeners()

//-------------------------------

console.log('\nAdding prepend listeners:')
await setTimeout(2000);

event.prependListener('open', () => { console.log('1 open')})
event.prependOnceListener('open', () => { console.log('This will be only call once - prepend call')})

printTotalListeners()
await setTimeout(4000);

//-------------------------------

console.log('\nEmitting a second event:\n')
await setTimeout(2000);
event.emit('open')
await setTimeout(4000);
printTotalListeners()

//-------------------------------

console.log('\nEmitting a third event:\n')
await setTimeout(2000);
event.emit('open')
await setTimeout(4000);

//-------------------------------

console.log('\nRemoving all listeners')
await setTimeout(2000);

event.removeAllListeners('open')
printTotalListeners()

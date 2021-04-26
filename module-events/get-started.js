import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('started')
});

eventEmitter.on('end', () => {
  console.log('end')
});

eventEmitter.on('print calls', (call, end) => {
  console.log(`this is the ${call}º call end will finishel at ${end}º call`)
})


eventEmitter.emit('start');

let start = 1;
const end_call_number = 5;

const id = setInterval(() =>{ 
    if (start <= end_call_number)
        eventEmitter.emit('print calls', start++, end_call_number);
    else {
        clearInterval(id);
        eventEmitter.emit('end');
    }
}, 1000)
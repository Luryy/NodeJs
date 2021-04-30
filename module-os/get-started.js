import os from 'os';

console.log(`Your current OS is: ${os.type}`)
console.log(`Free memory in bytes: ${os.freemem}`)
console.log(`1º CPUs info: %o`, os.cpus()[0])
console.log(`Your system is up for: %ds`, os.uptime())

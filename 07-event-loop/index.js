console.log(1)
setTimeout(() => console.log(2),0)
process.nextTick(() => console.log(3))
process.nextTick(() => {console.log(4); process.nextTick(() => console.log(5))}) 
process.nextTick(() => console.log(6))
setTimeout(() => console.log(7),10)
setTimeout(() => console.log(8),0)
setImmediate(() => console.log(9))
console.log(10)

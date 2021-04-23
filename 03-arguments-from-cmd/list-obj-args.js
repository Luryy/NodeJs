console.log("Printing obj args:")
console.log(process.argv)
const args = require('minimist')(process.argv.slice(2))
console.log(args)
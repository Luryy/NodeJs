import { Readable, Writable, Transform, Duplex} from 'stream'

const readableStream = new Readable({
  read(size) {
    for (let i = 1; i < 4; i++) {
        this.push(String(i))
    }
    this.push(null)
  },
})

const write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

const writableStream = new Writable({
    write,
})


readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

writableStream.write('writting')

writableStream.on('close', () => writableStream.end())

//----------------

const transform = (chunk, encoding, callback) => {
  console.log(chunk.toString().toUpperCase());
  callback();
}

const transformStream = new Transform({
    transform,
});

const duplexStream = new Duplex({
    read(size){
        console.log(size)
    },
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
        this.push(chunk)
    }
});


process.stdin.pipe(duplexStream).pipe(transformStream)
process.stdin.once('data', data => console.log(data))
process.stdin.push('teste')

transformStream.on('close', () => transformStream.end())
duplexStream.end()

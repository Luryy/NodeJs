const bufUnsafe = Buffer.allocUnsafe(4); // inicialize with dirty memory
console.log(bufUnsafe);

const buf = Buffer.alloc(4);
console.log(buf);
buf.write('Hez!')
console.log(buf);

for (const item of buf) {
  console.log(item)
}

console.log(buf.toString());

buf[2] = 121; // 122 ascci = y
console.log(buf.toString())

const copy_buf = Buffer.alloc(4);
console.log(copy_buf.toString());
buf.copy(copy_buf);
console.log(copy_buf.toString());

const slice = buf.slice(0, 2)
console.log(slice.toString()) //He
buf[1] = 111 //o
console.log(slice.toString()) 

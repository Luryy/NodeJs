import fs from 'fs'

fs.open('./test.txt', 'w+', (err, fd) => {
  console.log(fd)
})
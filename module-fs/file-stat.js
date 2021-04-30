import fs from 'fs'

fs.stat('./test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(
  stats.isFile(), 
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size 
  )
})
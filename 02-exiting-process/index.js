const express = require('express')

const app = express()

app.get('/kill-gracefully', (req, res) => {
  res.send('Killing proccess gracefully!')
  process.kill(process.pid, 'SIGTERM')
})

app.get('/kill-ungracefully', (req, res) => {
  res.send('Killing proccess ungracefully!')
  process.exit()
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

// process.on('SIGKILL', () => { // SIGKILL - cannot have a listener installed, it will unconditionally terminate Node.js on all platforms.
//   server.close(() => {
//     console.log('Process killed')
//   })
// })
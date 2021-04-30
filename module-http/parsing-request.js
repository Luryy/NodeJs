import http from 'http'

const port = 3000;

const server = http.createServer((req, res) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    console.log(JSON.parse(data));
    res.end();
  })
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
});
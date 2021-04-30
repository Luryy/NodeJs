import https from 'https'
import { setTimeout } from 'timers/promises'

console.log('Making a GET request:\n');

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/users/luryy',
  method: 'GET',
  headers: {'user-agent': 'node.js'}
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })

  res.on('end', () => process.stdout.write('\n\nEnd GET Request\n\n'))
})

req.on('error', error => {
  console.error(error)
})

req.end()

await setTimeout(2000);

console.log('\nMaking a POST request:\n');

const data = JSON.stringify({
  name: 'new_repo'
})

const post_options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/user/repos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'user-agent': 'node.js'
  }
}

const req_post = https.request(post_options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
  res.on('end', () => process.stdout.write('\n\nEnd POST Request\n\n'))
})

req_post.on('error', error => {
  console.error(error)
})

req_post.write(data)
req_post.end()

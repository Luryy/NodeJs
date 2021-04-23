setInterval(() => {
  console.log('This will be returned every after 2 seconds')
}, 2000)

const id1 = setInterval(() => {
    console.log('This will never be returned')
}, 2000)

clearInterval(id1)

const id2 = setInterval(() => {
    console.log('This will be returned once')
    clearInterval(id2)
}, 1000)

const myFunction = () => {
  console.log('This will be returned by a recursive setTimeout call')

  setTimeout(myFunction, 3010)
}

setTimeout(myFunction, 3010)

setTimeout(() => process.exit(1), 10000)
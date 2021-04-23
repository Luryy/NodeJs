// using calback

const fs = require('fs')
fs.readFile('./package.json', (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err)
    return
  }

  //no errors, process data
  console.log('buffer data from callback:', data)
})

// ----------------
// using promise
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Done with promise'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}

checkIfItsDone();

//-----------
// using async await

const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Done with async wait'), 50)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}
doSomething()
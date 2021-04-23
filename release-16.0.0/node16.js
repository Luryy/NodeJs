// --------------

const matchObj = /(Java)(Script)/d.exec('JavaScript');

console.log(matchObj);

// -------------
const { setTimeout } = require('timers/promises');

async function run() {
  await setTimeout(5000);
  console.log('Hello, World!')
}
run();
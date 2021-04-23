(async () => {
    const { setTimeout } = require('timers/promises')
    const chalk = require('chalk')
    const ProgressBar = require('progress')

    console.log('Starting logs:');
    console.log('My %s has %d years', 'cat', 2)
    //console.log('%o', Number)
    await setTimeout(2500);

    console.log('\nStarting console.count:'); // how many times a string is printed
    const oranges = ['orange', 'orange', 'test']
    const apples = ['just one apple']
    const thirdOrange = 'orange'
    oranges.forEach(fruit => {
        console.count(fruit)
    })
    apples.forEach(fruit => {
        console.count(fruit)
    })
    console.count(thirdOrange)
    await setTimeout(2500);

    console.log('\nStarting console.trace:'); // the local of console
    const function2 = () => console.trace('Log of trace')
    const function1 = () => function2()
    function1()
    await setTimeout(2500);

    console.log('\nStarting console.time:'); // the local of console
    const doSomething = async () =>{ await setTimeout(500); console.log('test')}
    const measureDoingSomething = async () => {
        console.time('doSomething()')
        //do something, and measure the time it takes
        await doSomething()
        console.timeEnd('doSomething()')
    }
    measureDoingSomething()
    await setTimeout(2500);

    console.log('\nStarting output color:'); // the local of console
    console.log('\x1b[33m%s\x1b[0m', 'output color!') // color
    console.log(chalk.yellow('output color with chalk')) 
    await setTimeout(2500);

    console.log('\nStarting progress bar:'); // using progress barconst ProgressBar = require('progress')
    const bar = new ProgressBar(':bar', { total: 10 })
    const timer = setInterval(() => {
        bar.tick()
        if (bar.complete) {
            clearInterval(timer)
        }
    }, 100)
   
    await setTimeout(2500);
    console.log('Cleaning logs with console.clear:');
    await setTimeout(2000);
    console.clear();
})();
import fs from 'fs/promises'

const content = 'Hello World!'
const more_content = '\nHi World!'

try {
    await fs.writeFile('./test.txt', content)
    await fs.appendFile('./test.txt', more_content)
    console.log('File was written successfully');
} catch (error) {
    console.log(error);
};

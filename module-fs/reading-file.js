import fs from 'fs/promises';

console.log('Init file reading...\n');

try {
    const file_content = await fs.readFile('./test.txt', 'utf-8');
    console.log(file_content);
} catch (error) {
    console.log(error);
}
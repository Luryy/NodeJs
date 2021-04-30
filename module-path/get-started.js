import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // define __filename because of esmodules use
const __dirname = path.dirname(__filename); // define __dirname because of esmodules use

const notes = '/users/luryy/notes.txt'

console.log(`Dir path: ${path.dirname(notes)}`)
console.log(`File name: ${path.basename(notes)}`)
console.log(`File extension: ${path.extname(notes)}`)
console.log(`File name without extension: ${path.basename(notes, path.extname(notes))}\n`)

console.log(`Join paths: ${path.join('/', 'users', 'luryy', 'notes.txt')}`)
console.log(`Current path: ${path.resolve()}`);
console.log(`Resolving paths: ${path.resolve('/', 'dir', 'file.txt')}`);
console.log(`Resolving paths with current: ${path.resolve('..', 'dir', 'file.txt')}\n`);

console.log(`Normalizing path string: ${path.normalize('/users/luryy/..//test.txt')}`);
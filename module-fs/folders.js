import fs from 'fs/promises'
import { setTimeout } from 'timers/promises'

try {
    console.log('Creating Folder:...\n')
    await fs.mkdir('test');
    await setTimeout(2000)

    console.log('Renaming Folder:...\n')
    await fs.rename('test', 'test-renamed')
    await setTimeout(2000)
    
    console.log('Deleating Folder:...\n')
    await fs.rmdir('test-renamed')
} catch (error) {
    console.log(error);
}
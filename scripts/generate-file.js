// generate-file.js
import { writeFileSync } from 'fs';
const fileSize = 100 * 1024 * 1024; // 100 MB
const data = Buffer.alloc(fileSize, 'a'); // Fill with 'a' characters

writeFileSync('large-file.txt', data);
console.log('Large file generated: large-file.txt');

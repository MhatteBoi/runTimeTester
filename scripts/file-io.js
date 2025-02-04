// scripts/file-io.js
import fs from 'fs';
const iterations = 10; // Number of read/write operations

function testFileIO() {
    const start = performance.now();
  
    for (let i = 0; i < iterations; i++) {
      const data = fs.readFileSync('large-file.txt', 'utf-8');
      fs.writeFileSync(`large-file-copy-${i}.txt`, data);
    }
  
    const duration = performance.now() - start;
    console.log(`Node File I/O completed in ${duration.toFixed(2)}ms`);
  }
  
  testFileIO();
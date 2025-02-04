const iterations = 10; // Number of read/write operations

async function testFileIO() {
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    const data = await Deno.readTextFile('large-file.txt');
    await Deno.writeTextFile(`large-file-copy-${i}.txt`, data);
  }

  const duration = performance.now() - start;
  console.log(`Deno File I/O completed in ${duration.toFixed(2)}ms`);
}

testFileIO();
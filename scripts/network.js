import { get } from 'https';

async function makeRequest(url) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    }).on('error', (err) => reject(err));
  });
}

async function testHTTP() {
  const start = performance.now();
  const url = 'https://jsonplaceholder.typicode.com/posts'; // Example API
  const numRequests = 500; 

  try {
    // Create an array of promises for concurrent requests
    const requests = Array.from({ length: numRequests }, () => makeRequest(url));

    // Wait for all requests to complete
    await Promise.all(requests);

    const duration = performance.now() - start;
    console.log(`Node.js ${numRequests} HTTP requests completed in ${duration.toFixed(2)}ms`);
  } catch (error) {
    console.error(`Node.js HTTP requests failed: ${error.message}`);
  }
}

testHTTP();
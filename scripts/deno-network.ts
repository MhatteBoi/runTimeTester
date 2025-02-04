// scripts/deno-network.ts
async function makeRequest(url: string) {
    const response = await fetch(url);
    return response.text();
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
        console.log(`Deno ${numRequests} HTTP requests completed in ${duration.toFixed(2)}ms`);
      } catch (error) {
        console.error(`Deno HTTP requests failed: ${error.message}`);
      }
    }
  
  testHTTP();
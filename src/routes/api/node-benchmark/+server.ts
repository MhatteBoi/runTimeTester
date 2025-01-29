// Endpoint

export async function GET() {
    // Simple Fibonacci benchmark
    const start = performance.now();
    const fib = (n: number): number => n <= 1 ? n : fib(n - 1) + fib(n - 2);
    fib(40);
    const duration = performance.now() - start;
  
    return new Response(`Fibonacci(40) calculated in ${duration.toFixed(2)}ms`);
  }
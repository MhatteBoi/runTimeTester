function fib(n: number): number {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
  const start = performance.now();
  fib(40);
  const duration = performance.now() - start;
  
  console.log(`Fibonacci(40) calculated in ${duration.toFixed(2)}ms`);
// scripts/deno-server.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

function fib(n: number): number {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

serve(async (req) => {
  const start = performance.now();
  fib(40);
  const duration = performance.now() - start;

  return new Response(`Fibonacci(40) calculated in ${duration.toFixed(2)}ms`);
}, { port: 8000 });
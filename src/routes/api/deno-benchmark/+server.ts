// Endpoint
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    const response = await fetch('http://localhost:8000/');
    const result = await response.text();
    return new Response(result);
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}
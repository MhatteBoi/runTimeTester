// src/routes/api/deno-file-io/+server.ts
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    const { stdout } = await execAsync('deno run --allow-read --allow-write scripts/deno-file-io.ts');
    return new Response(stdout);
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}
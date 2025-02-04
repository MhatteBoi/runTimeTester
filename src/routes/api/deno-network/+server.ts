import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    const { stdout } = await execAsync('deno run --allow-net scripts/deno-network.ts');
    return new Response(stdout);
  } catch (error) {
    return new Response(`Error: ${error}`, { status: 500 });
  }
}
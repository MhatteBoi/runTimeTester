<!-- src/routes/+page.svelte -->
<script lang="ts">
    let nodeResult: string;
    let denoResult: string;
    let isLoading = false;
  
    async function runBenchmark() {
      isLoading = true;
      try {
        // We'll add API endpoints for these in next step
        const nodeRes = await fetch('/api/node-benchmark');
        nodeResult = await nodeRes.text();
        
        const denoRes = await fetch('/api/deno-benchmark');
        denoResult = await denoRes.text();
      } catch (e) {
        nodeResult = denoResult = `Error: ${e}`;
      }
      isLoading = false;
    }
  </script>
  
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">Runtime Comparator</h1>
      
      <div class="flex justify-center mb-8">
        <button
          on:click={runBenchmark}
          class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? 'Running...' : 'Run Benchmarks'}
        </button>
      </div>
  
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Node.js Card -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-green-600">Node.js</h2>
          <pre class="bg-gray-800 text-green-400 p-4 rounded">{nodeResult || 'Click to run'}</pre>
        </div>
  
        <!-- Deno Card -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-blue-600">Deno</h2>
          <pre class="bg-gray-800 text-blue-400 p-4 rounded">{denoResult || 'Click to run'}</pre>
        </div>
      </div>
    </div>
  </div>
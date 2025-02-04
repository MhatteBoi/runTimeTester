<!-- src/routes/+page.svelte -->
<script lang="ts">
let nodeNetworkResult: string;
let denoNetworkResult: string;
let nodeBenchmarkResult: string;
let denoBenchmarkResult: string;
let nodeFileIoResult: string;
let denoFileIoResult: string;
let isLoading = false;
let isLoadingIo = false;
let isLoadingNetwork = false;

async function runBenchmark() {
  isLoading = true;
  try {
    const nodeRes = await fetch('/api/node-benchmark');
    nodeBenchmarkResult = await nodeRes.text();
    
    const denoRes = await fetch('/api/deno-benchmark');
    denoBenchmarkResult = await denoRes.text();
  } catch (e) {
    nodeBenchmarkResult = denoBenchmarkResult = `Error: ${e}`;
  }
  isLoading = false;
}

async function runFileIo() {
  isLoadingIo = true;
  try {
    const nodeRes = await fetch('/api/node-file-io');
    nodeFileIoResult = await nodeRes.text();
    
    const denoRes = await fetch('/api/deno-file-io');
    denoFileIoResult = await denoRes.text();
  } catch (e) {
    nodeFileIoResult = denoFileIoResult = `Error: ${e}`;
  }
  isLoadingIo = false;
}

async function runNetworkTest() {
    isLoadingNetwork = true;
    try {
      const nodeRes = await fetch('/api/node-network');
      nodeNetworkResult = await nodeRes.text();
      
      const denoRes = await fetch('/api/deno-network');
      denoNetworkResult = await denoRes.text();
    } catch (e) {
      nodeNetworkResult = denoNetworkResult = `Error: ${e}`;
    }
    isLoadingNetwork = false;
  }
  </script>
  

  <header class="bg-gray-100 p-10 text-center text-6xl border-b-stone-800 border ">
    <h1>Node vs Deno Benchmark</h1>
  </header>
  <div class="min-h-screen bg-slate-200 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">40th Fibonacci Number Calculation</h1>
      <p class="text-gray-800 mb-4 text-sm text-center">
        Calculates the 40th number in the Fibonacci sequence.
      </p>
      
      <!-- Benchmarks Section -->
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
        <!-- Node.js Benchmark Card -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-green-600">Node.js Benchmark</h2>
          <pre class="bg-gray-800 text-green-400 p-4 rounded">{nodeBenchmarkResult || 'Click button above to run'}</pre>
        </div>
  
        <!-- Deno Benchmark Card -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-blue-600">Deno Benchmark</h2>
          <pre class="bg-gray-800 text-blue-400 p-4 rounded">{denoBenchmarkResult || 'Click button above to run'}</pre>
        </div>
      </div>
  
      <!-- File I/O Section -->
      <h1 class="text-3xl font-bold text-center mt-12 mb-8">File I/O Test</h1>
      <p class="text-gray-800 mb-4 text-sm text-center">
        Reads and writes a 100MB text file 10 times to measure file I/O performance.
      </p>
      <div class="flex justify-center mb-8">
        <button
          on:click={runFileIo}
          class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
          disabled={isLoadingIo}
        >
          {isLoadingIo ? 'Running...' : 'Run File I/O'}
        </button>
      </div>
  
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Node.js File I/O Card -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-green-600">Node.js File I/O</h2>
          <pre class="bg-gray-800 text-green-400 p-4 rounded">{nodeFileIoResult || 'Click button above to run'}</pre>
        </div>
  
        <!-- Deno File I/O Card -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-blue-600">Deno File I/O</h2>
          <pre class="bg-gray-800 text-blue-400 p-4 rounded">{denoFileIoResult || 'Click button above to run'}</pre>
        </div>
      </div>
          <!-- HTTP Request Test Section -->
    <h1 class="text-3xl font-bold text-center mt-12 mb-8">HTTP Request Test</h1>
    <p class="text-gray-800 mb-4 text-sm text-center">
      Makes 500 HTTP requests to an external API to measure network performance.
    </p>
    <div class="flex justify-center mb-8">
      <button
        on:click={runNetworkTest}
        class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
        disabled={isLoadingNetwork}
      >
        {isLoadingNetwork ? 'Running...' : 'Run HTTP Test'}
      </button>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Node.js HTTP Card -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-green-600">Node.js HTTP</h2>
        <pre class="bg-gray-800 text-green-400 p-4 rounded">{nodeNetworkResult || 'Click button above to run'}</pre>
      </div>

      <!-- Deno HTTP Card -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4 text-blue-600">Deno HTTP</h2>
        <pre class="bg-gray-800 text-blue-400 p-4 rounded">{denoNetworkResult || 'Click button above to run'}</pre>
      </div>
    </div>
    </div>
  </div>
  
 
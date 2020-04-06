<script>
  import Cell from '../components/Cell.svelte';
  import Matrix from '../gameOfLife/matrix';
  import AliveCells from '../gameOfLife/coords.ts';
  export let width = 20;
  export let height = 12;
  let matrix = new Matrix(Array(width * height), { width, height });
  const FPS = 2;
  const msInterval = 1000 / FPS;
  let interval;

  $: toggle = function(x, y) {
    matrix.toggle(x, y);
    matrix = matrix;
  };

  $: isActive = matrix.getCell;

  $: next = function() {
    matrix = matrix.nextGeneration();
  };

  $: run = function() {
    interval = setInterval(() => {
      next();
    }, msInterval);
  };

  const stop = () => {
    clearInterval(interval);
  };

  const clear = () => {
    matrix = new Matrix(Array(width * height), { width, height });
  };
</script>

<style>
  .grid {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: blanchedalmond;
  }
  .row {
    display: flex;
  }
</style>

<div class="grid">
  {#each Array(height) as _, j}
    <div class="row">
      {#each Array(width) as __, i}
        <Cell x={i} y={j} {isActive} {toggle} />
      {/each}
    </div>
  {/each}

  <div>
    <button on:click={next}>Next</button>
    <button on:click={clear}>clear</button>
    <button on:click={run}>Run</button>
    <button on:click={stop}>Stop</button>
  </div>
</div>

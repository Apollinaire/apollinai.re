<script>
  import Cell from './Cell.svelte';
  // import { universe } from '../gameOfLife/listLife';
  // const FPS = 2;
  // const msInterval = 1000 / FPS;
  let cellSize = 40;
  const width = Math.ceil(window.innerWidth / cellSize);
  const height = Math.ceil(window.innerHeight / cellSize);
</script>

<div class="grid">
  {#each Array(height) as _, y}
    <div class="row">
      {#each Array(width) as __, x}
        <Cell {x} {y} />
      {/each}
    </div>
  {/each}

  <div>
    <!-- <button on:click={next}>Next</button>
    <button on:click={clear}>clear</button>
    <button on:click={run}>Run</button>
    <button on:click={stop}>Stop</button> -->
  </div>
</div>

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

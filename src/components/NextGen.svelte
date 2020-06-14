<script>
  import { universe } from '../gameOfLife/listLife.ts';
  function onClick() {
    universe.nextGeneration();
  }
</script>

<button on:click={onClick}>Next</button>

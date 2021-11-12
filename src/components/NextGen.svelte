<script>
  import { universe } from '../gameOfLife/listLife';
  function onClick() {
    universe.nextGeneration();
  }
</script>

<button on:click={onClick}>Next</button>

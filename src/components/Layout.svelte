<script>
  // import Nav from "../components/Nav.svelte"
  // export let segment;
</script>

<!-- <Nav {segment} /> -->

<main>
  <slot />
</main>

<style>
  main {
    flex-grow: 1;
    position: relative;
    background-color: #ffffef;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
  }

  :global(html, body) {
    height: 100%;
  }

  :global(#svelte) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

<script>
  // import Nav from "../components/Nav.svelte"
  // export let segment;
</script>

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

  :global(#sapper) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

<!-- <Nav {segment} /> -->

<main>
  <slot />
</main>

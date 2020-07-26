<script>
  import Link from '../components/Link.svelte';
  export let status;
  export let error;
</script>

<style>
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.2em 0;
  }

  p {
    margin: 0.5em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>
<div>
  <h1>{status}</h1>
  <p>{error.message}</p>
  <p>
    <Link href="/">back</Link>
  </p>
</div>

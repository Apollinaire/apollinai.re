<script>
  import InlineButton from './InlineButton.svelte';
  import caesar from '../lib/caesar';
  let clicked = false;
  let address = 'nsktEfutqqnsfn3wj';

  let onShowAddress = () => {
    clicked = true;
  };
</script>

{#if !clicked}
  <InlineButton on:click={onShowAddress}>Get in touch</InlineButton>
{:else}
  <p>{caesar(address, -5)}</p>
{/if}

<style>
  /* your styles go here */
</style>

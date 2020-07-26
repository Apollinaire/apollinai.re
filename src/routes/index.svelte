<script>
  import Logo from '../components/Logo.svelte';
  import Social from '../components/Social.svelte';
  import Contact from '../components/Contact.svelte';
</script>

<style>
  h1,
  h1 {
    font-size: 1.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  .two-column {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .item {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 16px;
  }
  .logo-wrapper {
    width: 120px;
    height: 120px;
  }

  .centered {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    .two-column {
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>Apollinaire - Freelance Software Engineer</title>
</svelte:head>

<div class="two-column">
  <div class="item centered">

    <div class="logo-wrapper">
      <Logo />
    </div>
  </div>
  <div class="item centered">
    <div>
      <h1>Apollinaire</h1>
      <p>Freelance software engineer</p>
      <p>
        <Contact />
      </p>
      <Social />
    </div>
  </div>

</div>

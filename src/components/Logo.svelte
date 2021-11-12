<div class="grid">
  <div class="pink top-left" />
  <div class="pink mid-left" />
  <div class="pink mid-right" />
  <div class="pink bot-left" />
  <div class="pink bot-mid" />
</div>

<style>
  .grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas:
      'top-left . .'
      'mid-left . mid-right'
      'bot-left bot-mid .';
  }
  .pink {
    background-color: #d65caf;
  }
  .top-left {
    grid-area: top-left;
  }
  .mid-left {
    grid-area: mid-left;
  }
  .mid-right {
    grid-area: mid-right;
  }
  .bot-left {
    grid-area: bot-left;
  }
  .bot-mid {
    grid-area: bot-mid;
  }
</style>

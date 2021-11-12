<script>
  export let href;
</script>

<a {href} {...$$props}>
  <slot />
</a>

<style>
  a:focus,
  a:hover {
    text-decoration: #d65daf underline;
    color: #d65daf;
  }
</style>

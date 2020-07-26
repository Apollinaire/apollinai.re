<script>
  export let href;
</script>

<style>
  a:focus,
  a:hover {
    text-decoration: #d65daf underline;
    color: #d65daf;
  }
</style>

<a {href} {...$$props}>
  <slot />
</a>

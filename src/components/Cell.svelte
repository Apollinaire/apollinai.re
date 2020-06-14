<script>
  import classnames from 'classnames';
  import { universe } from '../gameOfLife/listLife.ts';

  export let x;
  export let y;
</script>

<style>
  div {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: bisque;
  }
  div:hover {
    background-color: lightpink;
  }
  .active {
    background-color: hotpink;
  }
</style>

<div class={classnames({ active: ($universe[y] || {})[x] })} on:click={() => {universe.toggle(x, y)}} />

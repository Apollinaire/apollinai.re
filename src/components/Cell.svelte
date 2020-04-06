<script>
  import classnames from "classnames"

  const doNothing = () => {
    console.log("do nothing")
  }

  export let isActive
  export let toggle
  export let x
  export let y
</script>

<style>
  div {
    border: 1px solid black;
    width: 22px;
    height: 22px;
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

<div class={classnames({ active: !!isActive(x,y) })} on:click={() =>toggle(x,y)} ></div>  

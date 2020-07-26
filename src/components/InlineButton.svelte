<style>
  button {
    display: inline;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
}

button {
  text-decoration: underline;
}
button:hover,
button:focus {
    text-decoration:#D65DAF underline;
    color: #D65DAF;
}
button:focus {
  outline: -webkit-focus-ring-color auto 1px;
  outline-offset: 1px;
}


</style>

<button on:click >
  <slot />
</button>

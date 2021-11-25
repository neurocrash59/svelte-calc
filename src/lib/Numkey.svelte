<script>
  import {display} from '../store';

  function inputNum() {
    display.update(n => n + this.innerText);
  }
</script>

<div on:click={inputNum} class="numkey"><slot /></div>

<style>
    .numkey {
    padding: 1rem;
    background: white;
    border-radius: 0.25rem;
  }

  .numkey:hover {
    cursor: pointer;
    background: #eee;
  }

  .numkey:active {
    background: #e3e3e3;
  }
</style>
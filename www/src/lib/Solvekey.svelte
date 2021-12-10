<script>
  import {display} from '../store';

  function solveCalc() {
    display.update(n => eval(n));
  }
</script>

<div on:click={solveCalc} class="solvekey"><slot /></div>

<style>
    .solvekey {
    padding: 1rem;
    background: white;
    border-radius: 0.25rem;
  }

  .solvekey:hover {
    cursor: pointer;
    background: #eee;
  }

  .solvekey:active {
    background: #e3e3e3;
  }
</style>
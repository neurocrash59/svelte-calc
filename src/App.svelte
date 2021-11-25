<script>
  import {display} from './store';
  import Numkey from './lib/Numkey.svelte';
  import Solvekey from './lib/Solvekey.svelte';
  import Clearkey from './lib/Clearkey.svelte';
</script>

<main class="container">
  <h1>Svelte Calculator</h1>

  <article>
    <header>
      <div class="display">{$display}</div>
    </header>
      <section class="calc-body">
        <div class="keypad grid">
          <Numkey>7</Numkey>
          <Numkey>8</Numkey>
          <Numkey>9</Numkey>        
          <Numkey>&#247;</Numkey>
        </div>
        <div class="keypad grid">
          <Numkey>4</Numkey>
          <Numkey>5</Numkey>
          <Numkey>6</Numkey>
          <Numkey>x</Numkey>
        </div>
        <div class="keypad grid">
          <Numkey>1</Numkey>
          <Numkey>2</Numkey>
          <Numkey>3</Numkey>
          <Numkey>-</Numkey>
        </div>
        <div class="keypad grid">
          <Numkey>0</Numkey>
          <Numkey>.</Numkey>
          <Solvekey>=</Solvekey>
          <Numkey>+</Numkey>
        </div>
      </section>
    <section class="clear-btn">
      <div class="keypad grid">
        <Clearkey>CLEAR</Clearkey>
      </div>
    </section>
  </article>
</main>

<style>
  main {
    text-align: center;
  }

  article {
    font-size: 1.5rem;
    font-weight: 700;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0;
    border-radius: 0.5rem;
  }

  .display {
    background: white;
    height: 3rem;
    text-align: right;
    font-size: 1.5rem;
    padding-right: 0.5rem;
    border: 1px solid black;
    border-radius: 0.5rem;
  }

  .calc-body {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid black;
    border-radius: 0.5rem;
    background: white;
  }

  .clear-btn {
    padding-bottom: 0;
  }
</style>
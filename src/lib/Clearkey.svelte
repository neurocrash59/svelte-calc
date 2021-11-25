<script>
  import {display} from '../store';

  function clear() {
    display.set('');
  }
</script>

<button on:click={clear}><slot /></button>
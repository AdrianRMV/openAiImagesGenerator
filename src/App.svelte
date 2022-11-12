<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'


  
</script>

<main>
  <h1>Vamos viendo esto</h1>
  <input type="text" class="imageToSearch" />

  <button class="btn-action"></button>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>

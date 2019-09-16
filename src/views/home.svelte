<script>
  export let name;
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
</style>

<div class="container">
  <h1>Welcome {name} Skywallker!</h1>
  <img width="50%" style="padding:20px" src="https://svelte.dev/svelte-logo-outline.svg" alt="Svelte logo">
</div>

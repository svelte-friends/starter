<script>
  /** Imports */
  import { onMount, onDestroy } from "svelte";
  import Button  from "components/button.svelte";
</script>

<style>
  @import "./reset.css";

  :root {
    --var-color-primary: orange;
  }

  :global(html, body, .shell) {
    height: 100%;
    width: 100%;
  }
  .shell {
    color: aliceblue; /** TODO: remove */
    background: #363636;
  }
</style>

<!-- Simulate a Shell Architecture -->
<div class="shell">
  <h1>Svelte App</h1>
  <Button />
</div>

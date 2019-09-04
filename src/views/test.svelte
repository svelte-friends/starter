<script>
  import { onMount } from "svelte";

  onMount(() => console.log("MySvelte Component"));
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 14px;
  }
</style>

<div class="container">
  <h4>Test Page</h4>
</div>

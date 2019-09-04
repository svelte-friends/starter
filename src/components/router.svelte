<script>


  export let selected = undefined;
  let selectedView = undefined;


  // Update varibal when prop change
  $: {
    selectedView = selected;
  }


</script>



<svelte:component this={selectedView} />
<script>
  import {auth} from './actions/authorization.action';


  export let title = "Status Bar Content";

  const onClick = () => {
    title += " clicked";
  };
</script>

<style>
  .bar {
    height: 56px;
    background: #575757;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }
</style>

<div

  on:click={onClick} 
  class="bar"
  >
  {title}
</div>

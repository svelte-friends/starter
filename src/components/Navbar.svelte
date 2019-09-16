<script>
  import { Link } from "svelte-routing";
</script>

<style>
 
  .item {
    color: white;
    padding: 16px;
    height: 64px;
    
  }

  :global(a) {
    text-decoration: none;
  }

  .container {
    height: 64px;
    background: gray;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
 
</style>

<nav>
  <div class="container">
    <Link  to="/">
      <span class="item">Home</span>
    </Link>
    <Link to="/about">
      <span class="item">About</span>
    </Link>
  </div>
</nav>

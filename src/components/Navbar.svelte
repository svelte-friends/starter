<script>
  import { Link } from "svelte-routing";
</script>

<style>
  .brand-logo {
    padding: 0 10px;
    color: white;
  }
  .options {
    color: white;
    margin: 40px 0;
    padding: 0 40px;
  }
  .container {
    padding: 40px 0;
  }
  .container * {
    border: 1px solid;
  }
</style>

<nav>
  <br />
  <span class="brand-logo">Routing Tutorial</span>
  <div class="container">
    <Link to="/">
      <span class="options">Home</span>
    </Link>
    <Link to="/about">
      <span class="options">About</span>
    </Link>
  </div>
</nav>

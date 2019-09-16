<script>
  /** Imports */
  import { Router, Route } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";

  import Navbar from "./components/Navbar.svelte";
  import { Home, About } from "./views";

  let title;
  let subtitle;
  let content;
</script>

<style>

  :root {
    --var-color-primary: orange;
  }

  :global(html, body, .shell) {
    height: 100%;
    width: 100%;
    font-family: 'Open Sans', Tahoma, Geneva, Verdana, sans-serif
  }
  .shell {
    color: aliceblue; /** TODO: remove */
    background: #363636;
  }

    @import "./reset.css";
</style>

<!-- Simulate a Shell Architecture -->
<Router>
  <div class="shell">
    <Navbar />
    <div class="container">
      <Route path="/">
        <Home name={'Luke'} />
      </Route>
      <Route path="/about" component={About} />
    </div>
  </div>
</Router>

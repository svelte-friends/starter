<script>
  /** Imports */
  import { Router, Route } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";

  import Navbar from "./components/Navbar.svelte";
  import { Home, About } from "./pages";

  let title;
  let subtitle;
  let content;
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
<Router>
  <div class="shell">
    <h1>Svelte App</h1>
    <Navbar />
    <div class="container">
      <Route path="/">
        <Home name={'MyName'} />
      </Route>
      <Route path="/about" component={About} />
    </div>
  </div>
</Router>

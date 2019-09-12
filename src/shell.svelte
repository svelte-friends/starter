<script>
  /** Imports */
  import { Router, Route } from "svelte-routing";
  import { onMount, onDestroy } from "svelte";
  import Button from "@packages/shared/button.svelte";
  import Card from "@packages/shared/card.svelte";

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
  .card-section {
    padding: 20px;
    width: 30%;
  }

  .card-section div {
    padding-bottom: 15px;
  }
</style>

<!-- Simulate a Shell Architecture -->
<Router>
  <div class="shell">
    <h1>Svelte App</h1>
    <Navbar />
    <Button />
    <div class="container">
      <Route path="/">
        <Home name={'MyName'} />
      </Route>
      <Route path="/about" component={About} />
    </div>
    <br />
    <div class="card-section">
      <div>
        Title:
        <input bind:value={title} placeholder="input title" />
      </div>
      <div>
        Subtitle:
        <input bind:value={subtitle} placeholder="input subtitle" />
      </div>
      <div>
        Content:
        <input bind:value={content} placeholder="input content" />
      </div>
      <Card {title} {subtitle} {content} />
    </div>
  </div>
</Router>

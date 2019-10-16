<script>
  /** Imports */
  import { onMount, onDestroy } from "svelte";
  import Router from "svelte-spa-router";
  import Navbar from "./components/navbar.svelte";
  import { Home, About } from "./views";

  let title;
  let subtitle;
  let content;

  const routes = {
    '/:name?': Home,
    '/about': About,
  };

  // Navbar items
  let navBarRightItems = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" }
  ];
</script>

<style>
  :root {
    --var-color-primary: orange;
  }

  :global(html, body, .shell) {
    height: 100%;
    width: 100%;
    font-family: "Open Sans", Tahoma, Geneva, Verdana, sans-serif;
  }
  .shell {
    color: aliceblue; /** TODO: remove */
    background: #363636;
    overflow: hidden;
  }

  @import "./reset.css";
</style>

<!-- Simulate a Shell Architecture -->
<div class="shell">
  <Navbar rightItems={navBarRightItems} />
  <div class="container">
    <Router {routes} />
  </div>
</div>

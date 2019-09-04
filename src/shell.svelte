<script>
  /** Imports */
  import { onMount, onDestroy } from "svelte";
  import Router from "./components/router.svelte";
  import { NavigationService } from "./services/route.service";
  import StatusBar from "./components/status-bar.svelte";

  let name = "Hello World";
  let selectedRouter = undefined;

  /** A simple router switch with dynamic component */
  const routerSwitch = async nextRouter => {
    console.log("[shell] new route detected", nextRouter);
    let module;
    switch (nextRouter) {
      case "init":
        module = await import(
          /* webpackChunkName: "init.view" */ "./views/init.svelte"
        );
        break;
      case "login":
        module = await import(
          /* webpackChunkName: "login.view" */ "./views/login.svelte"
        );

        break;
      default:
        break;
    }
    selectedRouter = module.default;
  };

  // life-cycle
  onMount(() => {
    console.log("[shell]:on Mount");
    NavigationService.onNavigation.subscribe(routerSwitch);

    setTimeout(() => {
      NavigationService.navigate("login");
    }, 3000);
  });

  onDestroy(() => {
    NavigationService.onNavigation.unsubscribe(routerSwitch);
  });
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
  <StatusBar />
  <h1>Svelte App</h1>
  <Router selected={selectedRouter} />
</div>

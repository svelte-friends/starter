<script>
  import svelte from "svelte";
  import { link } from "svelte-spa-router";
  // Items on the left
  export let leftItems = [];
  // items on the right
  export let rightItems = [];
</script>

<style>
  .container {
    height: 64px;
    background: var(--navbar-color-bg, #575757);
    display: flex;
  }

  .item {
    align-items: center;
    display: flex;
  }

  .container ul {
    display: flex;
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }
  .left {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .default {
    text-decoration: none;
    color: var(--navbar-color-text, #ffffff);
    height: 64px;
    padding: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .default:hover {
    background: var(--navbar-color-hover, #0c0c0c44);
  }
</style>

<nav class="container">
  <section class="left">
    <ul>
      {#each leftItems as item}
        <li class="item">
        <!-- Give to developer a change to change the Template -->
          <slot name="left" {item}>
            <a class="default" href={item.path} use:link>{item.text}</a>
          </slot>
        </li>
      {/each}
    </ul>
  </section>
  <section class="right">
    <ul>
      {#each rightItems as item}
        <li class="item">
        <!-- Give to developer a change to change the Template -->
          <slot name="right" {item}>
            <a class="default" href={item.path} use:link>{item.text}</a>
          </slot>
        </li>
      {/each}
    </ul>
  </section>
</nav>

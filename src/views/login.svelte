<script>
  import { onMount } from "svelte";
</script>

<style>
  .group {
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: 14px;
  }
</style>

<h4>Login Form</h4>

<form>
  <div class="group">
    <label for="login-name">Name</label>
    <input id="login-name" name="name" type="text" />
  </div>
  <div class="group">
    <label for="login-password">Password</label>
    <input id="login-password" name="name" type="password" autocomplete="current-password" />
  </div>

</form>

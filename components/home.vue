<template>
  <div class="home">
    <topbar></topbar>
  </div>
</template>
<script lang="ts">
import topbar from "./topbar.vue";

export default {
  name: "Home",
  components: {
    topbar
  }
};
</script>
<style>
.home {
  height: 200vh;
  width: 100vw;
  background-image: url("~assets/images/background.png");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
</style>

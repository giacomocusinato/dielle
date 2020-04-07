<template>
  <div class="topbar">
    <h1 class="topbar__title">Dielle</h1>
    <ul class="topbar__menu">
      <li><a data-ref="home" v-on:click="onMenuItemClick">Home</a></li>
      <li><a data-ref="home" v-on:click="onMenuItemClick">Chi siamo</a></li>
      <li><a data-ref="home" v-on:click="onMenuItemClick">Servizi</a></li>
      <li><a data-ref="home" v-on:click="onMenuItemClick">Team</a></li>
      <li><a data-ref="home" v-on:click="onMenuItemClick">Partner</a></li>
      <li><a data-ref="home" v-on:click="onMenuItemClick">Contatti</a></li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default {
  el: ".topbar",
  methods: {
    onScroll(e) {},
    onMenuItemClick(e) {
      console.log(e);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  }
};
</script>
<style>
.topbar {
  position: sticky;
  padding: 15px 30px;
}
.topbar__title {
  font-family: "Fira Sans", sans-serif;
}
</style>

<template>
  <div>
    <navbar></navbar>
    <home></home>
    <about></about>
  </div>
</template>

<script>
import Navbar from "~/components/navigation/navbar.vue";
import Home from "~/components/home.vue";
import About from "~/components/About.vue";

export default {
  components: {
    Navbar,
    Home,
    About
  }
};
</script>

<style>
</style>

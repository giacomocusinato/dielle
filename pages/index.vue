<template>
  <div>
    <navbar></navbar>
    <home></home>
    <about></about>
    <foo></foo>
  </div>
</template>

<script lang="ts">
import Navbar from "~/components/navigation/navbar.vue";
import Home from "~/components/home.vue";
import About from "~/components/about.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Navbar,
    Home,
    About,
    foo: Footer
  }
};
</script>

<style>
</style>

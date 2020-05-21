<template>
  <div>
    <navbar></navbar>
    <home></home>
    <certification></certification>
    <services></services>
    <highlights></highlights>
    <about></about>
    <contact></contact>
    <foo></foo>
  </div>
</template>

<script lang="ts">
import Navbar from "~/components/navigation/navbar.vue";
import Home from "~/components/home.vue";
import Certification from "~/components/certification.vue";
import Services from "~/components/services.vue";
import Highlights from "~/components/highlights.vue";
import About from "~/components/about.vue";
import Contact from "~/components/contact.vue";
import Footer from "~/components/footer.vue";

export default {
  components: {
    Navbar,
    Home,
    Certification,
    Services,
    Highlights,
    About,
    Contact,
    foo: Footer
  }
};
</script>

<style>
</style>

<template>
  <div class="topbar">
    <h1 class="topbar__title">Dielle</h1>
    <topbar-menu></topbar-menu>
  </div>
</template>

<script>
import TopbarMenu from "./topbar-menu";

export default {
  components: {
    TopbarMenu
  },
  methods: {
    onScroll(e) {
      const { scrollTop } = document.documentElement;

      if (scrollTop <= 100 && this.$el.classList.contains("topbar--sticky")) {
        this.$el.classList.remove("topbar--sticky");
      }
      if (scrollTop > 100 && !this.$el.classList.contains("topbar--sticky")) {
        this.$el.classList.add("topbar--sticky", true);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss">
.topbar {
  height: 25px;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    color: white;
    text-transform: uppercase;
  }

  &--sticky {
    position: sticky;
    top: 0;
    height: 35px;
    color: black;
    background-color: white;
    transition: all 0.5s;
  }
}
</style>

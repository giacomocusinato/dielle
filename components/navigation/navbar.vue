<template>
  <div class="navbar" :class="{ 'navbar--sticky': isSticky }">
    <div class="navbar__wrapper">
      <h1 class="navbar__title">{{ $t("globals.company_name") }}</h1>
      <navbar-menu :is-navbar-sticky="isSticky"></navbar-menu>
    </div>
  </div>
</template>

<script>
import NavbarMenu from "./navbar-menu";

export default {
  components: {
    NavbarMenu
  },
  data() {
    return { isSticky: false };
  },
  methods: {
    onScroll(e) {
      const { scrollTop } = document.documentElement;

      if (scrollTop > 100 && !this.isSticky) {
        this.isSticky = true;
        this.$el.classList.add("navbar--sticky");
      }
      if (scrollTop <= 100 && this.isSticky) {
        this.isSticky = false;
        this.$el.classList.remove("navbar--sticky");
      }
    }
  },
  mounted() {
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: $navbar-height;
  width: 100%;
  position: absolute;

  &__wrapper {
    @include home-wrapper;

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: white;
    text-transform: uppercase;
  }

  &--sticky {
    position: sticky;
    top: 0;
    height: $navbar-height + 15px;
    background-color: white;
    transition: all 0.7s;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.24);
    z-index: 5;

    .navbar__title {
      color: black;
      color: $text-gray;
    }
  }
}
</style>

<template>
  <nav>
    <ul class="navbar-menu" :class="{'navbar-menu--sticky': isNavbarSticky}">
      <li class="navbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Home</a>
      </li>
      <span class="navbar-menu__bull">&bull;</span>
      <li class="navbar-menu__item">
        <a data-ref="about" v-on:click="onMenuItemClick">Chi siamo</a>
      </li>
      <span class="navbar-menu__bull">&bull;</span>
      <li class="navbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Servizi</a>
      </li>
      <span class="navbar-menu__bull">&bull;</span>
      <li class="navbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Team</a>
      </li>
      <span class="navbar-menu__bull">&bull;</span>
      <li class="navbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Partner</a>
      </li>
      <span class="navbar-menu__bull">&bull;</span>
      <li class="navbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Contatti</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["isNavbarSticky"],
  methods: {
    onMenuItemClick(e) {
      const ref = e.target.dataset.ref;
      const el = document.querySelectorAll(`[data-scroll-to='${ref}']`)[0];
      window.scrollTo({
        top: window.pageYOffset + el.getBoundingClientRect().top,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-menu {
  display: none;
  align-items: center;
  font-size: 12px;

  @include md {
    display: flex;
  }

  &--sticky {
    .navbar-menu__item {
      color: black;
    }
    .navbar-menu__bull {
      color: black;
    }
  }
}
.navbar-menu__item {
  color: white;
  text-transform: uppercase;
  cursor: pointer;
}
.navbar-menu__bull {
  margin: 0 10px;
  color: white;
}
</style>

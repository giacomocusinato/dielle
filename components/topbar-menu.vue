<template>
  <nav>
    <ul class="topbar-menu">
      <li class="topbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Home</a>
      </li>
      <span class="topbar-menu__bull">&bull;</span>
      <li class="topbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Chi siamo</a>
      </li>
      <span class="topbar-menu__bull">&bull;</span>
      <li class="topbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Servizi</a>
      </li>
      <span class="topbar-menu__bull">&bull;</span>
      <li class="topbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Team</a>
      </li>
      <span class="topbar-menu__bull">&bull;</span>
      <li class="topbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Partner</a>
      </li>
      <span class="topbar-menu__bull">&bull;</span>
      <li class="topbar-menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Contatti</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    onMenuItemClick() {}
  }
};
</script>

<style lang="scss">
.topbar-menu {
  display: none;
  align-items: center;
  font-size: 12px;

  @include md {
    display: flex;
  }
}
.topbar-menu__item {
  color: white;
  text-transform: uppercase;
}
.topbar-menu__bull {
  margin: 0 10px;
  color: white;
}
</style>

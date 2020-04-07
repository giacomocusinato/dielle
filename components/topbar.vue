<template>
  <div class="topbar">
    <h1 class="topbar__title">Dielle</h1>
    <ul class="topbar__menu">
      <li class="topbar__menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Home</a>
      </li>
      <span class="topbar__menu__bull">&bull;</span>
      <li class="topbar__menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Chi siamo</a>
      </li>
      <span class="topbar__menu__bull">&bull;</span>
      <li class="topbar__menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Servizi</a>
      </li>
      <span class="topbar__menu__bull">&bull;</span>
      <li class="topbar__menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Team</a>
      </li>
      <span class="topbar__menu__bull">&bull;</span>
      <li class="topbar__menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Partner</a>
      </li>
      <span class="topbar__menu__bull">&bull;</span>
      <li class="topbar__menu__item">
        <a data-ref="home" v-on:click="onMenuItemClick">Contatti</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  methods: {
    onScroll(e) {
      const { scrollTop } = document.documentElement;

      if (scrollTop <= 100 && this.$el.classList.contains("topbar--sticky")) {
        this.$el.classList.remove("topbar--sticky");
      }
      if (scrollTop > 100 && !this.$el.classList.contains("topbar--sticky")) {
        this.$el.classList.add("topbar--sticky", true);
      }
    },
    onMenuItemClick(e) {
      console.log(e);
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
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &--sticky {
    position: sticky;
    top: 0;
    height: 35px;
    color: black;
    background-color: white;
    transition: all 0.5s;
  }
}
.topbar__menu {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.topbar__menu__bull {
  margin: 0 10px;
}
</style>

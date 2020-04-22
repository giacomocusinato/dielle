<template>
  <section class="home">
    <div class="home__brand">
      <img class="home__logo" src="~assets/icons/logo-white.svg" />
    </div>
    <div class="home__hero">
      <h2 class="home__hero__header">
        Software e
        <br />Supervisione
      </h2>
      <p class="home__hero__sub">Disponibile per qualsiasi ulteriore informazione</p>
      <btn class="home__hero__btn">Clicca per saperne di più</btn>
    </div>
  </section>
</template>

<script lang="ts">
import Btn from "./common/btn.vue";

export default {
  components: {
    Btn
  }
};
</script>

<style lang="scss" scoped>
.home {
  @include bg-gradient;
  @include home-wrapper;

  height: 100vh;
  width: 100vw;
  padding-top: $navbar-height !important;
  box-sizing: border-box;
}

.home__logo {
  width: 400px;
  margin: 0 auto;
  display: block;
}

.home__hero {
  color: white;
  position: absolute;
  bottom: 120px;

  &__header {
    font-size: 45px;
    font-weight: 400;
    text-transform: uppercase;
  }
  &__sub {
    font-size: 17pt;
    margin-top: 10px;
    font-weight: 400;
  }
  &__btn {
    margin-top: 10px;
  }
}
</style>

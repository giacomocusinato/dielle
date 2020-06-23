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
  },
  methods: {
    onShowMoreClick(e) {
      const el = document.querySelectorAll(
        `[data-scroll-to='certification']`
      )[0];

      if (el) {
        const top = window.scrollTo({
          top: window.pageYOffset + el.getBoundingClientRect().top - 70,
          behavior: "smooth"
        });
      }
    }
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
  width: 80%;
  margin: 60px auto 0 auto;
  display: block;

  @include lg {
    width: 300px;
  }
}

.home__hero {
  color: white;
  margin: 60px;
  text-align: center;
  width: 350px;
  margin: 120px auto;
  // position: absolute;
  // bottom: 30px;
  &__header {
    font-size: 35px;
    font-weight: 400;
    text-transform: uppercase;
  }
  &__sub {
    font-size: 17px;
    margin-top: 10px;
    font-weight: 400;
  }
  &__btn {
    margin-top: 10px;
    margin: 10px auto;
  }

  @include lg {
    &__header {
      font-size: 45px;
    }
    &__sub {
      font-size: 20px;
    }
  }
}
</style>

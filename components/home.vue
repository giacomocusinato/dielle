<template>
  <section class="home">
    <div class="home__brand">
      <img class="home__logo" src="~assets/icons/logo-white.svg" />
    </div>
    <div class="home__hero">
      <h2 class="home__hero__header">Automazione Industriale</h2>
      <p
        class="home__hero__sub"
      >Progettiamo quadri elettrici e software per l'automazione industriale da più di 30 anni</p>
      <btn class="home__hero__btn" @click.native="onShowMoreClick">Scopri di più</btn>
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

      console.log(document.querySelectorAll(`[data-scroll-to]`));

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.home__brand {
  width: 80%;
  margin: 0px auto 0 auto;

  @include md {
    width: 300px;
  }
  @include lg {
    width: 40vh;
  }
}
.home__logo {
  width: 100%;
  display: block;
}

.home__hero {
  color: white;
  text-align: center;
  align-self: flex-end;
  margin: 0 auto 0px auto;

  &__header {
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
  }
  &__sub {
    font-size: 17px;
    margin-top: 10px;
    font-weight: 400;
  }
  &__btn {
    margin: 15px auto 0 auto;
  }

  @include md {
    width: 500px;
  }

  @include lg {
    width: 600px;

    &__header {
      font-size: 35px;
    }
    &__sub {
      font-size: 20px;
    }
  }
}
</style>

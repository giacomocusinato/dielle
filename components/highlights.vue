<template>
  <section class="highlights">
    <div class="highlights__wrapper">
      <div class="highlights__item">
        <div class="highlights__item__square" />
        <div class="highlights__item__number">30</div>
        <div class="highlights__item__text">{{ $t("highlights.items.years") }}</div>
      </div>
      <div class="highlights__item">
        <div class="highlights__item__square" />
        <div class="highlights__item__number">20</div>
        <div class="highlights__item__text">{{ $t("highlights.items.team_size") }}</div>
      </div>
      <div class="highlights__item">
        <div class="highlights__item__square" />
        <div class="highlights__item__number">7</div>
        <div class="highlights__item__text">{{ $t("highlights.items.services") }}</div>
      </div>
      <div class="highlights__item">
        <div class="highlights__item__square" />
        <div class="highlights__item__number">10</div>
        <div class="highlights__item__text">{{ $t("highlights.items.partners") }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Spacer from "./common/spacer.vue";

export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.highlights {
  height: 500px;
  display: block;
  position: relative;
  &::after {
    content: "";
    background-image: url("~assets/images/wiring.jpg");
    background-size: cover;
    background-position: 10% 80%;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}
.highlights__wrapper {
  @include section-wrapper;

  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.highlights__item {
  text-align: center;
  color: white;
  flex: 1;
  margin-bottom: 60px;

  &__square {
    width: 60px;
    height: 60px;
    border: 2px solid white;
    margin: 0 auto;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
  }
  &__number {
    font-size: 49px;
    font-weight: bold;
    margin-top: 15px;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
  }
  &__text {
    height: 0;
    font-size: 13px;
    font-weight: 500;
    margin-top: 15px;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
  }
}
</style>
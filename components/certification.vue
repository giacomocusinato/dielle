<template>
  <section class="certification">
    <div class="certification__wrapper">
      <img class="certification__image" src="~assets/images/certification.png" />
      <div class="certification__main">
        <h3 class="certification__header">Dielle è un'azienda certificata</h3>
        <spacer class="certification__spacer" />
        <div
          class="certification__text"
        >Le nostre esperienze e le nostre conoscenze ci permettono di eseguire quadri elettrici e cablaggi nel rispetto delle più severe normative, sia europee (CE) che nord – americane (UL/CSA).</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Spacer from "./common/spacer.vue";

export default {
  components: {
    Spacer
  }
};
</script>

<style lang="scss" scoped>
.certification {
  background-color: $bg-light;
}
.certification__wrapper {
  @include section-wrapper;

  display: flex;
  justify-content: space-between;
}
.certification__main {
  text-align: right;
}
.certification__header {
  @include section-header;
}
.certification__spacer {
  margin-left: auto;
}
.certification__text {
  @include section-text;

  max-width: 580px;
}
.certification__image {
  width: 300px;
  margin-left: 30px;
  display: none;

  @include md {
    display: block;
  }
}
</style>
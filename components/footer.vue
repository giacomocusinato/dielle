<template>
  <footer class="footer">
    <img class="footer__logo" src="~assets/icons/logo-white.svg" />
    <div class="footer__entries">
      <div class="footer__entry">
        <h4 class="footer__entry__header">Contatti</h4>
        <div class="footer__entry__text">
          Via Galileo Galilei 1, Galliera Veneta (PD) 35015
          <br />
          049548291
          <br />
          info@dielleimpianti.it
        </div>
      </div>
      <div class="footer__entry">
        <h4 class="footer__entry__header">Lavora con noi</h4>
        <div class="footer__entry__text">
          Clicca qui per inviare il tuo curriculum
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.footer {
  @include bg-gradient;
  @include section-wrapper;

  padding-top: 30px !important;
  padding-bottom: 0 !important;
  display: flex;
  justify-content: space-between;
}

.footer__logo {
  width: 180px;
  height: 180px;
}

.footer__entries {
  margin-top: 30px;
}
.footer__entry {
  margin-bottom: 30px;

  &__header {
    font-size: medium;
    color: white;
    margin-bottom: 5px;
  }
  &__text {
    @include section-text;

    color: white;
    line-height: 18px;
  }
}
</style>

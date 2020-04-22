<template>
  <footer class="footer">
    <img class="footer__logo" src="~assets/icons/logo-white.svg" />
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.footer {
  @include bg-gradient;
  @include home-wrapper;

  padding-top: 0 !important;
  padding-bottom: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__logo {
  width: 180px;
  height: 180px;
}
</style>

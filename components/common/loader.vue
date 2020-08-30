<template>
  <div class="loader"></div>
</template>

<script lang="ts">
export default {
  props: {}
};
</script>

<style lang="scss" scoped>
.loader {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 0.8s linear infinite;
  -webkit-animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>

<template>
  <div class="card">
    <div class="card__title">{{ title }}</div>
    <div class="card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 30px;
  background-color: rgba($color: #000000, $alpha: 0.4);
  width: 100%;
}
.card__title {
  color: white;
  font-size: 17px;
  font-weight: 400;
}
</style>

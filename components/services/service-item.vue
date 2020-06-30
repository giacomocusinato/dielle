<template>
  <div class="service-item" :class="'service-item--' + direction">
    <div class="service-item__square" v-if="direction === 'left'" />
    <div class="service-item__text">
      <h4 class="service-item__header">{{ name }}</h4>
      <div class="service-item__description">{{ description }}</div>
    </div>
    <div class="service-item__square" v-if="direction === 'right'" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: String,
    description: String,
    direction: String
  }
};
</script>

<style lang="scss" scoped>
.service-item {
  // align-items: center;
  display: flex;
  margin: 15px 0;

  &--right {
    justify-content: flex-end;
    text-align: right;
  }
  &--left {
    justify-content: flex-start;
    text-align: left;
  }

  @include md {
    margin: 0;
  }
}
.service-item__text {
  margin: 0 15px;

  @include md {
    flex: auto;
    height: 0;
    max-width: calc(100% - 90px);
  }
}
.service-item__header {
  @include small-header;
}
.service-item__description {
  @include section-text;

  margin-top: 5px;
}
.service-item__square {
  flex: initial;
  height: 45px;
  // width: 45px;
  border: 1px solid $pacific-blue;

  @include md {
    display: inline-block;
  }
}
</style>
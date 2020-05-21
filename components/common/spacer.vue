<template>
  <div class="spacer" :class="'spacer--' + position"></div>
</template>

<script lang="ts">
export default {
  props: {
    position: {
      type: String,
      default: "center",
      validator(value) {
        return ["left", "right", "center"].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.spacer {
  height: 1px;
  width: 30px;
  background-color: $text-gray;
  margin: 30px 0;

  &--left {
    margin-right: auto;
  }
  &--right {
    margin-left: auto;
  }
  &--center {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

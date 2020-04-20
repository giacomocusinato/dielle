<template>
  <div class="btn" role="button">
    <slot>Click</slot>
  </div>
</template>

<script>
import TopbarMenu from "./topbar-menu";

export default {
  data: {}
};
</script>

<style lang="scss">
.btn {
  font-size: 15px;
  padding: 15px;
  border-radius: 8px;
  background-color: white;
  color: #797979;
  width: fit-content;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.8s ease 0s;

  &:hover {
    background-color: darken(white, 3%);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
  }

  &--primary {
    color: white;
    background-color: $denim-blue;
    &:hover {
      background-color: darken($denim-blue, 3%);
    }
  }
}
</style>

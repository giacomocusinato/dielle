<template>
  <div class="btn" :class="getClass()" :role="role">
    <slot>Click</slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    role: {
      type: String,
      default: "button"
    }
  },
  methods: {
    getClass() {
      return {
        "btn--primary": this.type === "primary",
        "btn--default": this.type === "default"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px;
  border-radius: 8px;
  width: fit-content;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease 0s;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }

  &--default {
    font-size: 15px;
    color: #797979;
    background-color: white;
    &:hover {
      background-color: darken(white, 5%);
    }
  }

  &--primary {
    font-size: small;
    font-weight: 300;
    color: white;
    background-color: $denim-blue;
    &:hover {
      background-color: darken($denim-blue, 5%);
    }
  }
}
</style>

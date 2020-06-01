<template>
  <div class="btn" :class="getClass()">
    <div class="btn__button btn__inner" v-if="btnType == 'button'" :role="role">
      <slot>Click</slot>
    </div>
    <a class="btn__link btn__inner" v-if="btnType == 'link'" :href="href" alt="alt" target="_blank">
      <slot>Click</slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      default: "button",
      validator: val => ["button", "link", undefined].includes(val)
    },
    theme: {
      type: String,
      default: "default"
    },
    href: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    role: {
      type: String,
      default: "button"
    }
  },
  methods: {
    getClass() {
      return {
        "btn--primary": this.theme === "primary",
        "btn--default": this.theme === "default"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 8px;
  width: fit-content;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease 0s;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }

  &--default {
    font-size: 13px;
    color: #797979;
    background-color: white;
    &:hover {
      background-color: darken(white, 5%);
    }

    @include lg {
      font-size: 15px;
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

  .btn__inner {
    display: block;
    padding: 15px;
  }

  .btn__link {
    color: inherit;
    text-decoration: inherit;
  }
}
</style>

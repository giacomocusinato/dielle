<template>
  <div class="btn" :class="getClass()">
    <div class="btn__button btn__inner" v-if="btnType == 'button'" :role="role">
      <div class="btn__button__content">
        <div><slot>Click</slot></div>
      </div>
      <div class="btn__button__loader">
        <loader v-if="loading"></loader>
      </div>
    </div>
    <a
      class="btn__link btn__inner"
      v-if="btnType == 'link'"
      :href="href"
      alt="alt"
      target="_blank"
    >
      <slot>Click</slot>
    </a>
  </div>
</template>

<script>
import Loader from "./loader.vue";

export default {
  components: {
    Loader
  },
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
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getClass() {
      return {
        "btn--primary": this.theme === "primary",
        "btn--default": this.theme === "default",
        "btn--loading": this.loading
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
  transition: background-color 0.5s ease 0s;

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

  &--loading {
    .btn__button__content {
      visibility: hidden;
    }
    .btn__button__loading {
      display: block;
    }
  }

  .btn__inner {
    display: block;
    padding: 15px;
    position: relative;
  }

  .btn__link {
    color: inherit;
    text-decoration: inherit;
  }

  .btn__button__loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

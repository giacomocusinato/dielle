<template>
  <section class="contact" data-scroll-to="contact">
    <div class="contact__wrapper">
      <h3 class="contact__header">{{ $t("contact.header") }}</h3>
      <spacer />
      <div class="contact__text">{{ $t("contact.description") }}</div>

      <contact-form class="contact__form" />

      <h3 class="contact__header">{{ $t("contact.job_header") }}</h3>
      <spacer />
      <div class="contact__text">{{ $t("contact.job_description") }}</div>
    </div>
  </section>
</template>

<script>
import Spacer from "./common/spacer.vue";
import Card from "./common/card.vue";
import ContactLocation from "./contact/contact-location.vue";
import ContactForm from "./contact/contact-form.vue";
import Btn from "./common/btn.vue";

export default {
  components: {
    Spacer,
    ContactForm,
    Btn
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.contact {
  background-color: $bg-color-light;
}

.contact__wrapper {
  @include section-wrapper;
}

.contact__header {
  @include section-header;

  text-align: center;
}

.contact__text {
  @include section-text;

  text-align: center;
  padding: 0 20%;
}

.contact__form {
  margin: 60px 0;
}
</style>

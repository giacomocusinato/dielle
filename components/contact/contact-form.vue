<template>
  <form class="contact_form" method="post">
    <div class="contact_form__block">
      <label for="input-name">{{ $t("contact.form.name.label") }}</label>
      <input
        v-model="formData.name"
        id="input-name"
        :placeholder="$t('contact.form.name.placeholder')"
      />
    </div>
    <div class="contact_form__block">
      <label for="input-email">{{ $t("contact.form.email.label") }}</label>
      <input
        v-model="formData.email"
        id="input-email"
        :placeholder="$t('contact.form.email.placeholder')"
      />
    </div>
    <div class="contact_form__block">
      <label for="input-email">{{ $t("contact.form.tel.label") }}</label>
      <input
        v-model="formData.telephone_number"
        id="input-tel"
        :placeholder="$t('contact.form.tel.placeholder')"
      />
    </div>
    <div class="contact_form__block">
      <label for="input-message">{{ $t("contact.form.message.label") }}</label>
      <textarea
        v-model="formData.message"
        id="input-message"
        :placeholder="$t('contact.form.message.placeholder')"
      />
    </div>
    <btn theme="primary" class="contact_form__btn">
      {{
      $t("contact.form.send")
      }}
    </btn>
  </form>
</template>

<script>
import Btn from "../common/btn.vue";

export default {
  components: {
    Btn
  },
  data: function() {
    return {
      formData: {
        name: "",
        email: "",
        phone_number: "",
        message: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.contact_form__block {
  margin: 15px 0;

  > label {
    @include section-text;

    font-weight: 300;
    text-transform: uppercase;
    display: block;
    margin-bottom: 5px;
  }
  > input,
  textarea {
    @include section-text;

    width: 100%;
    padding: 8px;

    &::placeholder {
      color: darken(white, 20%);
      opacity: 1; /* Firefox */
    }
    &:-ms-input-placeholder {
      color: darken(white, 20%);
    }
    &::-ms-input-placeholder {
      color: darken(white, 20%);
    }
  }
  > textarea {
    height: 200px;
  }
}
</style>

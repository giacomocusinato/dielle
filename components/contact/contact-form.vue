<template>
  <form class="contact_form">
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
    <div class="contact_form__submit">
      <btn
        theme="primary"
        class="contact_form__btn"
        @click.native="onSubmit"
        :loading="formLoading"
        v-if="!formSuccess"
      >
        {{ $t("contact.form.send") }}
      </btn>
      <p v-if="formSuccess">Your email was succesfully sent.</p>
      <p v-if="formError">
        Sorry, an error has occurred while sending the email.
      </p>
    </div>
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
      },
      formLoading: false,
      formSuccess: false,
      formError: false
    };
  },
  methods: {
    async onSubmit(e) {
      console.log(this.formData);
      this.formLoading = true;
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const res = await this.$http.post("/cgi-bin/mailer.php", this.formData);
        console.log(res);
        this.formLoading = false;
        this.formSuccess = true;
        this.formError = false;
        console.log("success");
      } catch (err) {
        this.formLoading = false;
        this.formError = true;
        this.formSuccess = false;
        console.log("fail");
      }
    }
  },
  mounted() {
    // this.onSubmit = this.onSubmit.bind(this);
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

  .contact_form__submit {
    display: flex;

    p {
      @include section-text;
    }
  }

  .contact_form__btn {
    margin-right: 30px;
  }
}
</style>

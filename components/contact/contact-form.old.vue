<template>
  <form
    class="contact_form"
    enctype="multipart/form-data"
    action="http://localhost:5000/test.py"
    method="post"
  >
    <div class="contact_form__block">
      <label for="input-name">Il tuo nome</label>
      <input v-model="formData.name" id="input-name" placeholder="La tua email" />
    </div>
    <div class="contact_form__block">
      <label for="input-email">La tua email</label>
      <input v-model="formData.email" id="input-email" placeholder="Il tuo nome" />
    </div>
    <div class="contact_form__block">
      <label for="input-message">Il tuo messaggio</label>
      <textarea
        v-model="formData.message"
        id="input-message"
        placeholder="Inserisci qui il tuo messaggio"
      />
    </div>
    <btn theme="primary" class="contact_form__btn">Invia</btn>
    <button type="submit">Submit</button>
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
        email: "",
        name: "",
        body: ""
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

    color: white;
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
    color: white;
    background-color: rgba($color: #000000, $alpha: 0.3);
    border: none;
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

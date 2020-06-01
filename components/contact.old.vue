<template>
  <section class="contact" data-scroll-to="contact">
    <div class="contact__wrapper">
      <h3 class="contact__header">Mettiti in contatto con noi!</h3>
      <spacer class="contact__spacer" />
      <div class="contact__text">
        Grandi o piccoli. Abbiamo qualsiasi soluzione per ogni vostra esigenza.
        Il nostro personale qualificato risponderà ad ogni vostra domanda e vi
        indicherà la soluzione più adeguata al vostro bisogno.
      </div>
      <div class="contact__cards">
        <card class="contact__card" title="I nostri uffici">
          <contact-location />
        </card>
        <card class="contact__card" title="Contattaci">
          <contact-form />
        </card>
      </div>
      <btn theme="primary" class="contact__btn">Inviaci una email</btn>
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
    Card,
    ContactLocation,
    ContactForm,
    Btn
  }
};
</script>

<style lang="scss" scoped>
.contact {
  // background-color: #f8f8ff;
  background-image: url("~assets/images/contact.png");
  background-size: 100% 100%;
}

.contact__wrapper {
  @include section-wrapper;
}
.contact__header {
  @include section-header;
}

.contact__header {
  @include section-header;

  text-align: center;
}

.contact__spacer {
  margin-left: auto;
  margin-right: auto;
}

.contact__text {
  @include section-text;

  text-align: center;
  padding: 0 20%;
}

.contact__btn {
  margin: 30px auto;
}
.contact__cards {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.contact__card {
  &:first-child {
    margin-right: 15px;
  }
  &:last-child {
    margin-left: 15px;
  }
}
</style>

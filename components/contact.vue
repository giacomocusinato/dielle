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
      <btn type="primary" class="contact__btn">Inviaci una email</btn>
    </div>

    <!-- <iframe
      class="contact__map"
      frameborder="0"
      :src="mapSrc"
      allowfullscreen
    ></iframe> -->
  </section>
</template>

<script>
import Spacer from "./common/spacer.vue";
import Btn from "./common/btn.vue";

export default {
  components: {
    Spacer,
    Btn
  },
  computed: {
    mapSrc: function() {
      return `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk6L_k3fWeEcRMsIo1T0YTjM&key=${process.env.NUXT_ENV_MAPS_API_KEY}`;
    }
  },
  mounted() {
    console.log(process.env.NUXT_ENV_MAPS_API_KEY);
  }
};
</script>

<style lang="scss" scoped>
.contact {
  background-color: #f8f8ff;
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
.contact__box {
  // padding: 30px;
  background-color: rgba($color: #000000, $alpha: 0.4);
  opacity: 0.8;
  display: flex;
  width: 100%;
}
.contact__map {
  flex: 2;
  width: 100%;
  height: 480px;
  margin-right: 30px;
}
.contact__info {
  flex: 1;
  margin-left: 30px;
  color: white;

  &__text {
    @include paragraph;
    color: white;
  }
}
</style>

<template>
  <div class="contact_location">
    <iframe class="contact_location__map" frameborder="0" :src="mapSrc" allowfullscreen></iframe>
    <div class="contact_location__text">
      <div>
        Via Galileo Galilei 1
        <br />Galliera Veneta (PD) 35015
        <br />Italia
      </div>
      <div>
        Orari ufficio: 8:00 - 18:00
        <br />Tel: 049 9440586
        <br />Fax: 049 9443414
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mapSrc: function() {
      return `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk6L_k3fWeEcRMsIo1T0YTjM&key=${process.env.NUXT_ENV_MAPS_API_KEY}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.contact_location__map {
  width: 100%;
  height: 300px;
  margin-top: 15px;
}
.contact_location__text {
  @include section-text;

  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  line-height: 18px;
  font-weight: 400;
}
</style>

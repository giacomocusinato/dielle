<template>
  <section class="map">
    <!-- <div id="gmap" class="map__container"></div> -->
    <iframe class="contact_location__map" frameborder="0" :src="mapSrc" allowfullscreen></iframe>
  </section>
</template>

<script>
import mapStyles from "~/assets/data/gmap_styles.json";

export default {
  mounted() {
    // let location = { lat: 45.6740688, lng: 11.815791 };
    // let map = new google.maps.Map(document.getElementById("gmap"), {
    //   zoom: 14,
    //   center: location,
    //   styles: mapStyles
    // });
    // let marker = new google.maps.Marker({
    //   location: { lat: 45.6740688, lng: 11.815791 },
    //   placeId: "ChIJ_aa-HnjWeEcRduuVXDc40yc",
    //   map
    // });
  },
  computed: {
    mapSrc: function() {
      return `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ_aa-HnjWeEcRduuVXDc40yc&key=${process.env.NUXT_ENV_MAPS_API_KEY}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  height: 345px;
}
.map__container,
.contact_location__map {
  height: 100%;
  width: 100%;
}
</style>
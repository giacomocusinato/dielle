<template>
  <section class="partners">
    <div class="partners__wrapper">
      <h3 class="partners__header">{{ $t("partners.header") }}</h3>
      <spacer />
    </div>
    <ul class="partners__list">
      <li
        class="partners__list_item"
        v-for="partner in formatted_partners"
        :key="partner.slug"
      >
        <img
          class="partners__logo"
          :src="require(`../assets/icons/partners/${partner.slug}.svg`)"
          :alt="partner.name"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Spacer from "./common/spacer.vue";
import ServiceItem from "./services/service-item.vue";

export default {
  components: {
    Spacer,
    ServiceItem
  },
  data() {
    return {
      partners: [
        "Siemens",
        "Rockwell Automation",
        "Asem",
        "Rittal",
        "Schneider",
        "Danfoss",
        "ABB",
        "Zanardo",
        "Yaskawa",
        "Woehner",
        "Italweber"
      ]
    };
  },
  computed: {
    formatted_partners: function() {
      return this.partners.map(p => ({
        name: p,
        slug: p
          .toLowerCase()
          .trim()
          .replace(" ", "_")
      }));
    }
  }
};
</script>

<style lang="scss" scoped>
.partners__wrapper {
  @include section-wrapper;
}
.partners__header {
  @include section-header;

  text-align: center;
}
.partners__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -60px;
}
.partners__list__item {
}
.partners__logo {
  height: 50px;
  margin: 30px 30px;
}
</style>

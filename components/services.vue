<template>
  <section class="services" data-scroll-to="services">
    <div class="services__wrapper">
      <h3 class="services__header">{{ $t("services.header") }}</h3>
      <spacer />
      <div class="services__text">{{ $t("services.description") }}</div>
      <div class="services__content">
        <div class="services__list">
          <service-item
            class="services__list__item"
            direction="right"
            :name="$t('services.items.design.name')"
            :description="$t('services.items.design.description')"
          />
          <service-item
            class="services__list__item"
            direction="right"
            :name="$t('services.items.electrical_panels.name')"
            :description="$t('services.items.electrical_panels.description')"
          />
          <service-item
            class="services__list__item"
            direction="right"
            :name="$t('services.items.industrial_software.name')"
            :description="$t('services.items.industrial_software.description')"
          />
        </div>
        <img class="services__image" src="~assets/icons/logo-outline.png" />
        <div class="services__list">
          <service-item
            class="services__list__item"
            direction="left"
            :name="$t('services.items.supervision_systems.name')"
            :description="$t('services.items.supervision_systems.description')"
          />
          <service-item
            class="services__list__item"
            direction="left"
            :name="$t('services.items.technical_assistance.name')"
            :description="$t('services.items.technical_assistance.description')"
          />
          <service-item
            class="services__list__item"
            direction="left"
            :name="$t('services.items.revamping.name')"
            :description="$t('services.items.revamping.description')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Spacer from "./common/spacer.vue";
import ServiceItem from "./services/service-item.vue";

export default {
  components: {
    Spacer,
    ServiceItem
  }
};
</script>

<style lang="scss" scoped>
.services__wrapper {
  @include section-wrapper;
}
.services__header {
  @include section-header;

  text-align: center;
}
.services__text {
  @include section-text;

  text-align: center;
}
.services__content {
  display: flex;
  justify-content: space-between;
  min-height: 480px;
}
.services__list {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.services__image {
  margin: auto 45px;
  // width: 240px;
  width: 0;
  margin: 0;
  flex: initial;
}
</style>
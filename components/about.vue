<template>
  <section class="about" data-scroll-to="about">
    <div class="about__wrapper">
      <div class="about__main">
        <h3 class="about__header">La nostra storia</h3>
        <spacer />
        <div class="about__text">
          <p>DIELLE S.R.L., un’azienda specializzata nella costruzione di quadri elettrici di comando, cablaggi bordomacchina ed automazioni industriali anche della massima sofisticazione.</p>
          <p>
            L’azienda nasce nel 1989 e i soci titolari hanno già maturato notevole esperienza
            in aziende del settore di primaria importanza.
            Il gruppo aziendale e costituito da circa 20 persone con notevole esperienza nella progettazione
            elettrica, nella costruzione di quadri elettrici anche della massima complessità, nei cablaggi
            elettrici bordomacchina, del collaudo degli impianti stessi, nella costruzione e nello sviluppo
            del software sia di automazione che di supervisione.
          </p>
          <p>
            La DIELLE SRL collabora ed è fornitrice di numerose aziende costruttrici di macchinari delle più svariate tipologie e dei più svariati settori, dal settore del food a quello del marmo, dal settore del packing a quello delle macchine utensili, dal settore della movimentazione a quello della plastica.
            L’attività si svolge in un fabbricato di proprietà di 1200 mq completo di carroponte per la movimentazione anche di quadri elettrici di grosse dimensioni.
            Ai nostri clienti forniamo quadri elettrici, impianti bordomacchina e cablaggi sia su progetto e disegno del committente che su progetto e disegno di nostro sviluppo
          </p>
          <p>Le nostre esperienze e le nostre conoscenze ci permettono di eseguire quadri elettrici e cablaggi nel rispetto delle più severe normative, sia europee (CE) che nord – americane (UL/CSA).</p>
        </div>
      </div>
      <img class="about__image" src="~assets/images/robot.png" />
    </div>
  </section>
</template>

<script lang="ts">
import Spacer from "./common/spacer.vue";

export default {
  components: {
    Spacer
  }
};
</script>

<style lang="scss" scoped>
.about__wrapper {
  @include section-wrapper;

  display: flex;
}
.about__main {
  flex: 60%;
}
.about__header {
  @include section-header;
}
.about__text > p {
  @include paragraph;
}
.about__image {
  width: 300px;
}
</style>

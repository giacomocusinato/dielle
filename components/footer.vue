<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__main">
        <img class="footer__logo" src="~assets/icons/logo-white.svg" />
        <div class="footer__entries">
          <div class="footer__entry">
            <h4 class="footer__entry__header">Dielle s.r.l</h4>
            <div class="footer__entry__text">
              Via Galileo Galilei 1, Galliera Veneta (PD) 35015
              <br />Tel: 049 9440586
              <br />Fax: 049 9443414
              <br />Mail:
              <a
                href="mailto:info@dielleimpianti.it"
                alt="Contattaci via mail"
              >info@dielleimpianti.it</a>
              <br />Partita IVA: 02474770282
            </div>
          </div>
          <!-- <div class="footer__entry">
          <h4 class="footer__entry__header">Lavora con noi</h4>
          <div class="footer__entry__text">
            Clicca
            <a href="mailto:info@dielleimpianti.it" alt="Inviaci il curriculum">qui</a> per inviare il tuo curriculum
          </div>
          </div>-->
        </div>
      </div>
      <div class="footer__copy">Dielle s.r.l © 2020</div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.footer {
  @include bg-gradient;

  width: 100%;
}

.footer__wrapper {
  @include section-wrapper;

  padding: 60px 30px 30px 30px;
}

.footer__main {
  display: flex;
  justify-content: space-around;
}

.footer__logo {
  width: 120x;
  height: 120px;
  margin-right: 15px;

  @include md {
    margin-right: 0;
    width: 150px;
    height: 150px;
  }
}

.footer__entries {
  display: flex;
  flex-wrap: wrap;
}
.footer__entry {
  flex: 50%;
  margin-bottom: 30px;

  @include md {
    width: 160px;
  }

  &__header {
    font-size: 15px;
    color: white;
    margin-bottom: 5px;
  }
  &__text {
    @include section-text;

    color: white;
    line-height: 18px;
    text-decoration: none;

    a {
      color: white;
      // text-decoration: none;
    }
  }
}
.footer__copy {
  @include section-text;

  color: white;
  font-style: italic;
  text-align: center;
  margin-top: 15px;

  @include md {
    margin-top: 30px;
  }
}
</style>


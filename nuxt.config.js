import dotenv from "dotenv";
dotenv.config();

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Dielle - Automazioni Industriali",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Dielle s.r.l. è un'azienda specializzata nella realizzazione di quadri elettrici, impianti bordomacchina e software per l'automazione industriale."
      },
      {
        name: 'keywords',
        content: 'Automazione industriale, Cablaggio quadri elettrici, Costruzione quadri elettrici, Automazione impianti, Manutenzione impianti, Software impianti industriali, Progettazione elettrica, Schemi elettrici, Impianti bordomacchina, Cablaggi impianti industriali, Programmazione plc, Omron, Siemens, Allen Bradley, Rockwell, Ge Power, Componenti elettrici, Impianti per prodotti alimentari, Impianti per materie plastiche, Impianti per la lavorazione del marmo, Telemecanique, Schneider, Zanardo, RIttal, Quadritalia, Moeller, Italweber, Phoenix, Magrini Galileo, Weidmüller, Inverter, Plc, Gefran, Siei, Siemens Vdo, Typact, Ascon, Yaskawa, UniOp, Technoeletric, Wago, Super Flash, Automa, WinCC, Profibus, Ethernet, Simatic, S7'
      },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }
    ],
    script: [
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=" +
          process.env.NUXT_ENV_MAPS_API_KEY
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [{ src: "~assets/scss/index.scss", lang: "scss" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/style-resources", "@nuxtjs/dotenv"],
  styleResources: {
    scss: [
      "~assets/scss/loaded/_branding.scss",
      "~assets/scss/loaded/_typography.scss",
      "~assets/scss/loaded/_breakpoints.scss",
      "~assets/scss/loaded/_layout.scss"
    ]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          { code: "en", iso: "en-US", file: "en.json" },
          { code: "it", iso: "it-IT", file: "it.json" }
        ],
        defaultLocale: "it",
        lazy: true,
        langDir: "locales/"
      }
    ],
    "@nuxt/http"
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
};

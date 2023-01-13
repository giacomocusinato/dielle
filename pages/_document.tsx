import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import i18nextConfig from '../next-i18next.config'


function Document(props: DocumentProps) {
  const currentLocale =
    props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
  const lang = Array.isArray(currentLocale) ? currentLocale[0] : currentLocale;

  return (
    <Html lang={lang}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/avenir-next-lt-pro" />
        <meta
          name="description"
          content="Dielle Impianti da oltre 30 anni opera nel settore dell'automazione industriale realizzando quadri elettrici e software industriale."
          key="desc"
        />
        <meta name="keywords" content="automazioni industriali,quadri elettrici,software,plc,automations" />
        <meta name="author" content="Dielle S.r.l" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
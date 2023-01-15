import type { AppProps } from 'next/app'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { CookiesProvider } from '../components/CookieBanner/CookiesContext';
import { CookiesRootConsumer } from '../components/CookieBanner/CookiesRootConsumer';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <CookiesRootConsumer />
      <Component {...pageProps} />
    </CookiesProvider>
  )
}


export default appWithTranslation(MyApp);

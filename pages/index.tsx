import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header';
import { HeroLogo } from '../components/HeroLogo';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dielle Impianti</title>
        <meta name="description" content="Dielle Impianti" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css" />
      </Head>

      <Header />

      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <video className="absolute min-w-full min-h-full object-cover -z-50 brightness-50" autoPlay muted loop>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <HeroLogo />
      </section>

    </>
  )
}

export default Home

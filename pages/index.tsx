import type { NextPage } from 'next'
import Head from 'next/head'
import { PlusIcon } from '@heroicons/react/solid';
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

      <section className="container mx-auto py-20 px-8 xl:px-40">
        <p className="text-4xl text-brand">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ullam voluptatem ipsum repudiandae sint accusamus deserunt, vitae rem natus enim reprehenderit cumque dolores necessitatibus commodi soluta alias dicta tempore ipsa ab.
        </p>
        <a
          className="mt-8 text-2xl text-brand flex items-center"
          role="button">
          <PlusIcon className="w-5 h-5 mr-2" />
          More
        </a>
      </section>
    </>
  )
}

export default Home

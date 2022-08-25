import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header';

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

    </>
  )
}

export default Home
